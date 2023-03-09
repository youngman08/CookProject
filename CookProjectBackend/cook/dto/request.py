from simplejson import loads as jr


class BaseRequest:
    def __init__(self, req, is_post=False):
        if is_post and len(req.POST) != 0:
            self.data = req.POST.dict()
        else:
            self.data = jr(req.body.decode('utf-8').replace("'", "\""))


class UserRegistrationRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.username = self.data['username']
        self.password = self.data['password']
        self.first_name = self.data['first_name']
        self.last_name = self.data['last_name']
        self.email = self.data['email']


class UserLoginRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.username = self.data['username']
        self.password = self.data['password']


class UserLogoutRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=False)
        self.username = self.data['username']


class UserUpdateProfileRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.first_name = self.data['first_name']
        self.last_name = self.data['last_name']
        self.bio = self.data['bio'] if 'bio' in self.data else None
        self.email = self.data['email']


class CreateTicketRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.username = self.data['username']
        self.category = self.data['category']
        self.text = self.data['text']


class ModifyTicketRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=False)
        self.text = self.data['text']
        self.status = self.data['status']


class AddFoodstuffRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.name = self.data['name']
        self.price = self.data['price']


class IngredientInfoRequest:
    def __init__(self, data):
        self.foodstuff = data['name']
        self.amount = data['amount']
        self.unit = data['unit']


class CreateRecipeRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        print(self.data)
        self.name = self.data['name']
        self.chief = self.data['chief']
        self.description = self.data['description']
        self.category = self.data['category']
        self.difficulty = self.data['difficulty']
        self.preparation_time = self.data['preparation_time']
        self.meal_tags = self.data['meal_tags']
        self.ingredients = self.data['ingredients']


class SearchRecipeInfoRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.category = self.data['category']
        self.difficulty = self.data['difficulty']
        self.preparation_time = self.data['preparation_time']
        self.meal_tags = self.data['meal_tags']
        self.ingredients = self.data['ingredients']


class CreateForumRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.name = self.data['name']
        self.owner = self.data['owner']


class PostOnForumRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.sender = self.data['params']['sender'].replace('"', '')
        self.text = self.data['params']['text'].replace('"', '')


class PostCommentRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req, is_post=True)
        self.username = self.data['username']
        self.text = self.data['text']
        self.recipe_id = self.data['recipe_id']


class RateRecipeRequest(BaseRequest):
    def __init__(self, req):
        super().__init__(req)
        self.username = self.data['username']
        self.score = self.data['score']
