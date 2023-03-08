from django.http import HttpResponse, JsonResponse
from django.utils import timezone
from django.views.decorators.http import require_http_methods
from .models import *
from .dto.request import *
from .dto.response import *
import json
from django.db import models


@require_http_methods(["POST"])
def register_user(request):
    request_model = UserRegistrationRequest(request)
    if get_object_else(('username', 'email'), (request_model.username, request_model.email), SystemUser, True):
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_EXISTS).json)
    user = SystemUser.objects.create(username=request_model.username, first_name=request_model.first_name,
                                     last_name=request_model.last_name, email=request_model.email)
    user.set_password(request_model.password)
    user.save()
    return HttpResponse()


@require_http_methods(["POST"])
def login_user(request):
    request_model = UserLoginRequest(request)
    user: SystemUser = get_object_else('username', request_model.username, SystemUser)
    if user:
        if not user.check_password(request_model.password):
            return HttpResponse(ErrorResponse(InternalError.CREDENTIAL_MISMATCH).json)
        user.last_login = timezone.now()
        user.save()
        return HttpResponse(ObjectInfoResponse(user).json)
    else:
        return HttpResponse(ErrorResponse(InternalError.CREDENTIAL_MISMATCH).json)


@require_http_methods(["PUT"])
def logout_user(request):
    request_model = UserLogoutRequest(request)
    if get_object_else('username', request_model.username, SystemUser, True):
        return HttpResponse()
    else:
        return HttpResponse(ErrorResponse(InternalError.CREDENTIAL_MISMATCH).json)


@require_http_methods(["GET", "PATCH"])
def profile(request, username):
    current_username = request.GET.get('username').replace('"', '')
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.CREDENTIAL_MISMATCH).json)
    chief = None
    if user.role == Role.CHIEF:
        chief = get_object_else('user__username', username, Chief)
    elif username != current_username:
        return HttpResponse(ErrorResponse(InternalError.UNAUTHORIZED).json)
    if request.method == "GET":
        return HttpResponse(ObjectInfoResponse(user, chief).json)
    if request.method == "PATCH":
        request_model = UserUpdateProfileRequest(request)
        update_profile(request_model, user, chief)
        return HttpResponse(ObjectInfoResponse(user, chief).json)


def update_profile(request, user, chief):
    user.first_name = request.first_name
    user.last_name = request.last_name
    user.email = request.email
    if chief:
        chief.bio = request.bio
        chief.save()
    user.save()


@require_http_methods(["GET"])
def view_followers(request, jesus_username):
    user: SystemUser = get_object_else('username', jesus_username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if user.role != Role.CHIEF.value:
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    chief: Chief = get_object_else('user__username', jesus_username, Chief)
    followers = [relationship.disciple for relationship in chief.relationship_set.all()]
    return HttpResponse(ObjectListResponse(followers).json)

@require_http_methods(["GET"])
def has_user_followed_chief(request, jesus_username):
    current_username = request.GET.get('username').replace('"', '')
    user: SystemUser = get_object_else('username', jesus_username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if user.role != Role.CHIEF.value:
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    chief: Chief = get_object_else('user__username', jesus_username, Chief)
    followers = [relationship.disciple for relationship in chief.relationship_set.all()]
    for follower in followers:
        if (follower.username == current_username):
            return HttpResponse("True")
    return HttpResponse("False")


@require_http_methods(["GET"])
def view_following(request, username):
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    following = [relationship.jesus.user for relationship in user.relationship_set.all()]
    return HttpResponse(ObjectListResponse(following).json)


@require_http_methods(["POST", "GET"])
def tickets(request):
    if request.method == "GET":
        return view_all_tickets(request)
    if request.method == "POST":
        return create_ticket(request)


def create_ticket(request):
    request_model = CreateTicketRequest(request)
    user: SystemUser = get_object_else('username', request_model.username.replace('"', ""), SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND))
    ticket = Ticket(user=user, category=request_model.category, status=TicketStatus.NEW.value, text=request_model.text)
    ticket.save()
    return HttpResponse(CreationResponse(ticket.ticket_id).json)


def view_all_tickets(request):
    username = request.GET.get('username').replace('"', "")
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND))
    return HttpResponse(ObjectListResponse(user.ticket_set.all()).json)


@require_http_methods(["GET"])
def view_ticket(request, ticket_id):
    ticket: Ticket = get_object_else('ticket_id', ticket_id, Ticket)
    if not ticket:
        return HttpResponse(ErrorResponse(InternalError.TICKET_NOT_FOUND).json)
    return HttpResponse(ObjectInfoResponse(ticket).json)


@require_http_methods(["PATCH"])
def update_ticket(request, ticket_id):
    assignee_username = request.GET.get('assignee')
    assignee: SystemUser = get_object_else('username', assignee_username, SystemUser)
    if not assignee:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    request_model = ModifyTicketRequest(request)
    status = request_model.status
    ticket: Ticket = get_object_else('ticket_id', ticket_id, Ticket)
    if not ticket:
        return HttpResponse(ErrorResponse(InternalError.TICKET_NOT_FOUND).json)
    if not TicketStatus.check_next_status_validity(ticket.status, status, assignee.role):
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    user = ticket.user
    if assignee.role != Role.ADMIN.value and assignee_username != user.username:
        return HttpResponse(ErrorResponse(InternalError.UNAUTHORIZED).json)
    ticket.status = status
    ticket.text = ticket.text + "\n***\n" + request_model.text
    ticket.save()
    if status == TicketStatus.DONE and TicketCategory.get_category(ticket.category) == TicketCategory.CHIEF_VERIFY:
        upgrade_to_chief(user)
    return HttpResponse(ObjectInfoResponse(ticket).json)


def upgrade_to_chief(user: SystemUser):
    user.role = Role.CHIEF.value
    user.save()
    chief = Chief(user=user)
    chief.save()


@require_http_methods(["POST", "GET"])
def foodstuffs(request):
    if request.method == "GET":
        return view_foodstuffs(request)
    if request.method == "POST":
        return create_foodstuff(request)


def create_foodstuff(request):
    request_model = AddFoodstuffRequest(request)
    if get_object_else('name', request_model.name, Foodstuff, True):
        return HttpResponse(ErrorResponse(InternalError.FOODSTUFF_EXISTS).json)
    foodstuff = Foodstuff.objects.create(name=request_model.name, price=request_model.price)
    foodstuff.save()
    return HttpResponse()


def view_foodstuffs(request):
    foodstuffs = Foodstuff.objects.all()
    serializedData = json.dumps([{'label': f.name,
                                  'value': f.name,
                                  } for f in foodstuffs])
    return HttpResponse(serializedData, content_type="application/json")
    # return HttpResponse(ObjectListResponse(foodstuffs).json)


@require_http_methods(["POST", "GET"])
def recipes(request):
    if request.method == "GET":
        return view_all_recipes(request)
    if request.method == "POST":
        return create_recipe(request)
    
@require_http_methods(["GET"])
def recipes2(request):
    recipe_id = request.GET.get('recipe_id')
    return view_recipe_by_id(request, recipe_id)


def create_recipe(request):
    request_model = CreateRecipeRequest(request)
    if get_object_else('name', request_model.name, Recipe, True):
        return HttpResponse(ErrorResponse(InternalError.RECIPE_EXIST).json)
    chief: Chief = get_object_else('user__username', request_model.chief, Chief)
    if not chief:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    recipe = Recipe.objects.create(name=request_model.name, chief=chief, description=request_model.description,
                                   category=request_model.category, difficulty=request_model.difficulty,
                                   preparation_time=request_model.preparation_time, meal_tags=request_model.meal_tags)
    ingredients = [IngredientInfoRequest(ingredient) for ingredient in request_model.ingredients]
    for item in ingredients:
        ingredient: Ingredient = get_object_else(('foodstuff__name', 'amount', 'unit'),
                                                 (item.foodstuff, item.amount, item.unit), Ingredient)
        if not ingredient:
            foodstuff: Foodstuff = get_object_else('name', item.foodstuff, Foodstuff)
            if not foodstuff:
                print(item.foodstuff)
                recipe.delete()
                return HttpResponse(ErrorResponse(InternalError.FOODSTUFF_NOT_FOUND).json)
            ingredient = Ingredient(foodstuff=foodstuff, amount=item.amount, unit=item.unit)
            ingredient.save()
        recipe.price += ingredient.amount * ingredient.foodstuff.price
        recipe.ingredients.add(ingredient)
    recipe.save()
    return HttpResponse(ObjectInfoResponse(recipe).json)


def view_all_recipes(request):
    recipes = Recipe.objects.all()
    return HttpResponse(ObjectListResponse(recipes).json)

def view_recipe_by_id(request, recipe_id):
    recipe = Recipe.objects.get(pk=recipe_id)
    return HttpResponse(ObjectInfoResponse(recipe).json)

@require_http_methods(["POST"])
def add_recipe_photo(request, recipe_id):
    recipe: Recipe = get_object_else('recipe_id', recipe_id, Recipe)
    if not recipe:
        return HttpResponse(ErrorResponse(InternalError.RECIPE_NOT_FOUND).json)
    recipe.photo = request.FILES['photo']
    recipe.save()
    return HttpResponse(ObjectInfoResponse(recipe).json)


@require_http_methods(["DELETE"])
def remove_recipe(request, recipe_id):
    recipe: Recipe = get_object_else('recipe_id', recipe_id, Recipe)
    if not recipe:
        return HttpResponse(ErrorResponse(InternalError.RECIPE_NOT_FOUND).json)
    recipe.delete()
    return HttpResponse(ObjectInfoResponse(recipe).json)


@require_http_methods(["GET"])
def filter_recipe(request):
    criterion = request.GET.get('criterion')
    value = request.GET.get(criterion)
    recipes = Recipe.objects.filter(**{criterion: value}).all()
    return HttpResponse(RecipeDetailedResponse(recipes).json)


@require_http_methods(["POST"])
def advanced_filter_recipe(request):
    request_model = SearchRecipeInfoRequest(request)
    recipes = Recipe.objects.all()
    if request_model.category != '':
        recipes = recipes.filter(category=request_model.category)
    if request_model.difficulty != '':
        recipes = recipes.filter(difficulty=request_model.difficulty)
    if request_model.preparation_time != '':
        recipes = recipes.filter(preparation_time=request_model.preparation_time)
    if request_model.meal_tags != '':
        recipes = recipes.filter(meal_tags__contains=request_model.meal_tags)
    for foodstuff in request_model.ingredients:
        recipes = recipes.filter(ingredients__foodstuff__name=foodstuff)
    return HttpResponse(ObjectListResponse(recipes).json)


@require_http_methods(["PUT"])
def follow(request, jesus_username):
    disciple_username = request.GET.get('username').replace('"', "")
    disciple: SystemUser = get_object_else('username', disciple_username, SystemUser)
    if not disciple:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if disciple_username == jesus_username:
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    jesus: Chief = get_object_else('user__username', jesus_username, Chief)
    if not jesus:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if get_object_else(('jesus__user__username', 'disciple__username'), (jesus_username, disciple_username),
                       Relationship, True):
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    relationship = Relationship(jesus=jesus, disciple=disciple)
    relationship.save()
    disciple: SystemUser = get_object_else('username', disciple_username, SystemUser)
    return HttpResponse(ObjectListResponse(disciple.relationship_set.all()).json)


@require_http_methods(["DELETE"])
def unfollow(request, jesus_username):
    disciple_username = request.GET.get('username').replace('"', "")
    disciple: SystemUser = get_object_else('username', disciple_username, SystemUser)
    if not disciple:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    jesus: Chief = get_object_else('user__username', jesus_username, Chief)
    if not jesus:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    relationship: Relationship = get_object_else(('jesus__user__username', 'disciple__username'),
                                                 (jesus_username, disciple_username), Relationship)
    if relationship:
        relationship.delete()
    disciple: SystemUser = get_object_else('username', disciple_username, SystemUser)
    return HttpResponse(ObjectListResponse(disciple.relationship_set.all()).json)


@require_http_methods(["POST", "GET"])
def forums(request):
    if request.method == "POST":
        return create_forum(request)
    if request.method == "GET":
        return get_forums(request)


def create_forum(request):
    request_model = CreateForumRequest(request)
    owner: Chief = get_object_else('user__username', request_model.owner, Chief)
    if not owner:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if get_object_else(('name', 'owner'), (request_model.name, owner), Forum, True):
        return HttpResponse(ErrorResponse(InternalError.ALREADY_REPORTED).json)
    forum = Forum(owner=owner, name=request_model.name)
    forum.save()
    return HttpResponse(CreationResponse(forum.forum_id).json)


def get_forums(request):
    username, is_owned = request.GET.get('username').replace('"', ''), bool(int(request.GET.get('owned')))
    if is_owned:
        chief: Chief = get_object_else('user__username', username, Chief)
        if not chief:
            return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
        
        return HttpResponse(ObjectListResponse(chief.forum_set.all()).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    joined_forums = []
    for forum in Forum.objects.all():
        if user in forum.members.all():
            joined_forums.append(forum)
    return HttpResponse(ObjectListResponse(joined_forums).json)


@require_http_methods(["PATCH"])
def join_forum(request, forum_id):
    username = request.GET.get('username').replace('"', "")
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if user in forum.banned.all():
        return HttpResponse(ErrorResponse(InternalError.BANNED_USER).json)
    if check_forum_membership(user, forum_id):
        return HttpResponse(ErrorResponse(InternalError.ALREADY_REPORTED).json)
    forum.members.add(user)
    forum.members_count += 1
    forum.save()
    return HttpResponse(ObjectListResponse(check_forum_membership(user)).json)


@require_http_methods(["PATCH"])
def leave_forum(request, forum_id):
    username = request.GET.get('username').replace('"', "")
    print(username)
    print(forum_id)
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if not check_forum_membership(user, forum_id):
        return HttpResponse(ErrorResponse(InternalError.ALREADY_REPORTED).json)
    forum.members.remove(user)
    forum.members_count -= 1
    forum.save()
    return HttpResponse(ObjectListResponse(check_forum_membership(user)).json)


@require_http_methods(["DELETE"])
def ban_from_forum(request, forum_id):
    owner_username = request.GET.get('owner')
    username = request.GET.get('username').replace('"', '')
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    if not owner_username == forum.owner.user.username:
        return HttpResponse(ErrorResponse(InternalError.UNAUTHORIZED).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if check_forum_membership(user, forum_id, banned=True):
        return HttpResponse(ErrorResponse(InternalError.ALREADY_REPORTED).json)
    forum.members.remove(user)
    forum.banned.add(user)
    forum.members_count -= 1
    forum.save()
    return HttpResponse(ObjectListResponse(forum.members.all()).json)


@require_http_methods(["DELETE"])
def delete_forum(request, forum_id):
    owner_username = request.GET.get('owner')
    chief: Chief = get_object_else('user__username', owner_username, Chief)
    if not chief:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    if owner_username != forum.owner.user.username:
        return HttpResponse(ErrorResponse(InternalError.NOT_ALLOWED).json)
    forum.delete()
    return HttpResponse(HttpResponse(ObjectListResponse(chief.forum_set.all()).json))


@require_http_methods(["POST"])
def post_on_forum(request, forum_id):
    print("request: ", request)
    request_model = PostOnForumRequest(request)
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    sender: SystemUser = get_object_else('username', request_model.sender, SystemUser)
    if not sender:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    message = ForumMessage(sender=sender, text=request_model.text, forum=forum)
    message.save()
    return HttpResponse(ObjectListResponse(forum.forummessage_set.all()).json)


@require_http_methods(["GET"])
def view_forum(request):
    username = request.GET.get('username').replace('"', "")
    forum_id = request.GET.get('forumId')
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    # if not check_forum_membership(user, forum_id):
    #     return HttpResponse(ErrorResponse(InternalError.UNAUTHORIZED).json)
    return HttpResponse(ForumDetailedResponse(forum).json)

@require_http_methods(["GET"])
def exist_user_in_forum(request, forum_id):
    username = request.GET.get('username').replace('"', '')
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if not forum:
        return HttpResponse(ErrorResponse(InternalError.FORUM_NOT_FOUND).json)
    if not check_forum_membership(user, forum_id):
        return HttpResponse("False")
    return HttpResponse("True")

@require_http_methods(["POST", "GET"])
def comments(request):
    if request.method == "POST":
        return post_comment(request)
    if request.method == "GET":
        return view_comments(request)


def post_comment(request):
    request_model = PostCommentRequest(request)
    user: SystemUser = get_object_else('username', request_model.username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    recipe: Recipe = get_object_else('recipe_id', request_model.recipe_id, Recipe)
    if not recipe:
        return HttpResponse(ErrorResponse(InternalError.RECIPE_NOT_FOUND).json)
    comment = Comment(user=user, recipe=recipe, text=request_model.text)
    comment.save()
    return HttpResponse(ObjectListResponse(recipe.comment_set.all()).json)


def view_comments(request):
    recipe: Recipe = get_object_else('recipe_id', request.GET.get('recipe_id'), Recipe)
    if not recipe:
        return HttpResponse(ErrorResponse(InternalError.RECIPE_NOT_FOUND).json)
    return HttpResponse(ObjectListResponse(recipe.comment_set.all()).json)


@require_http_methods(["DELETE"])
def delete_comment(request, comment_id):
    username = request.GET.get('username').replace('"', '')
    comment: Comment = get_object_else('comment_id', comment_id, Comment)
    if not comment:
        return HttpResponse(ErrorResponse(InternalError.COMMENT_NOT_FOUND).json)
    if comment.user.username != username:
        return HttpResponse(ErrorResponse(InternalError.UNAUTHORIZED).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    recipe = comment.recipe
    comment.delete()
    return HttpResponse(ObjectListResponse(recipe.comment_set.all()).json)


@require_http_methods(["PATCH"])
def rate_recipe(request, recipe_id):
    request_model = RateRecipeRequest(request)
    recipe: Recipe = get_object_else('recipe_id', recipe_id, Recipe)
    if not recipe:
        return HttpResponse(ErrorResponse(InternalError.RECIPE_NOT_FOUND).json)
    username = request_model.username
    if username == recipe.chief.user.username:
        return HttpResponse(ErrorResponse(InternalError.CANNOT_RATE_SELF).json)
    user: SystemUser = get_object_else('username', username, SystemUser)
    if not user:
        return HttpResponse(ErrorResponse(InternalError.ACCOUNT_NOT_FOUND).json)
    if user in recipe.rated_users.all():
        return HttpResponse(ErrorResponse(InternalError.RATING_TWICE).json)
    recipe.rated_users.add(user)
    recipe.score = (recipe.score * recipe.rate + request_model.score) / (recipe.rate + 1)
    recipe.rate += 1
    recipe.save()
    return HttpResponse(ObjectInfoResponse(recipe).json)


def check_forum_membership(user, forum_id=None, banned=False):
    if not forum_id:
        joined_forums = []
        for forum in Forum.objects.all():
            if user in forum.members.all():
                joined_forums.append(forum)
        return joined_forums
    forum: Forum = get_object_else('forum_id', forum_id, Forum)
    if banned:
        return user in forum.banned.all()
    return user in forum.members.all() or forum.owner.user.username == user.username


def get_object_else(pk_name, pk, entity, check_only: bool = False):
    if isinstance(pk_name, str):
        kwargs = {pk_name: pk}
    else:
        assert (isinstance(pk_name, list) or isinstance(pk_name, tuple)) and (isinstance(pk, list) or
                                                                              isinstance(pk, tuple))
        assert len(pk_name) == len(pk)
        kwargs = {pk_name[i]: pk[i] for i in range(len(pk_name))}
    entity: models.Model
    if not entity.objects.filter(**kwargs).exists():
        return None
    if check_only:
        return True
    return entity.objects.get(**kwargs)
