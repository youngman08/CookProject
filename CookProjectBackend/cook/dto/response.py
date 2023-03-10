from enum import Enum
from cook.models import *

from simplejson import dumps as jw


class InternalError(Enum):
    ALREADY_REPORTED = (208, "این عملیات همینک انجام شده‌است.")
    CREDENTIAL_MISMATCH = (404, "چنین اطلاعات حسابی ثبت نشده‌است.")
    ACCOUNT_EXISTS = (409, "چنین حسابی همینک وجود دارد.")
    NO_MATCH = (404, "نتیجه‌ای یافت نشد.")
    FOODSTUFF_EXISTS = (409, "این قلم خوراکی در حال حاضر وجود دارد.")
    INGREDIENT_EXISTS = (409, "این ماده غذایی در حال حاضر وجود دارد.")
    FOODSTUFF_NOT_FOUND = (409, "این قلم خوراکی یافت نشد.")
    INGREDIENT_NOT_FOUND = (409, "ماده غذایی یافت نشد.")
    RECIPE_NOT_FOUND = (409, "دستور غذایی یافت نشد.")
    CATEGORY_EXIST = (409, "این دسته غذایی در حال حاضر وجود دارد.")
    RECIPE_EXIST = (409, "این دستور غذایی در حال حاضر وجود دارد.")
    ACCOUNT_NOT_FOUND = (404, "چنین حسابی وجود ندارد.")
    TICKET_NOT_FOUND = (404, "چنین تیکتی ثبت نشده است.")
    UNAUTHORIZED = (401, "شما دسترسی لازم را ندارید.")
    NOT_ALLOWED = (405, "عملیات مجاز نیست.")
    FORUM_NOT_FOUND = (404, "چنین فورومی ایجاد نشده است.")
    BANNED_USER = (405, "شما از پیوستن به این فوروم بازداشته‌ شده‌اید.")
    COMMENT_NOT_FOUND = (404, "چنین نظری ثبت نشده‌است.")
    CANNOT_RATE_SELF = (405, "شما نمی‌توانید به دستور خود امتیاز دهید")
    RATING_TWICE = (405, "شما نمی‌توانید دوبار به یک دستور امتیاز دهید")

    def get_code(self):
        return self.value[0]


class BaseResponse:
    def __init__(self, data):
        self.json = jw(data)


class ErrorResponse(BaseResponse):
    def __init__(self, error: InternalError):
        error_code, error_message = error.value[0], error.value[1]
        self.data = dict(err_c=error_code, err_msg=error_message)
        super().__init__(self.data)


class CreationResponse(BaseResponse):
    def __init__(self, object_id):
        self.data = dict(id=object_id)
        super().__init__(self.data)


class ObjectInfoResponse(BaseResponse):
    def __init__(self, obj, detail_obj=None):
        self.data: dict = obj.data_dict
        self.data['ingredients'] = [x.data_dict for x in obj.ingredients.all()]
        if detail_obj:
            self.data.update(detail_obj.data_dict)
        super().__init__(self.data)


class ObjectListResponse(BaseResponse):
    def __init__(self, objects):
        self.data = [obj.data_dict for obj in objects]
        super().__init__(self.data)


class ForumDetailedResponse(BaseResponse):
    def __init__(self, forum: Forum):
        self.data = forum.data_dict
        self.data['members'] = [member.data_dict for member in forum.members.all()]
        self.data['messages'] = [message.data_dict for message in forum.forummessage_set.all()]
        super().__init__(self.data)


class RecipeDetailedResponse(BaseResponse):
    def __init__(self, recipes):
        self.data = []
        for recipe in recipes:
            recipe: Recipe
            r_data = recipe.data_dict
            r_data['ingredients'] = [ingredient.data_dict for ingredient in recipe.ingredients.all()]
            self.data.append(r_data)
        super().__init__(self.data)
