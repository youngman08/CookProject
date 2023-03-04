from django.test import TestCase
from cook.models import *
from simplejson import loads as jr, dumps as jw
from .dto.response import *
from .enums import *


def check_internal_error(test_model: TestCase, response, error=None):
    response_str = response.content.decode("utf-8")
    if error is None:
        test_model.assertEqual(len(response_str), 0)
        return
    test_model.assertEqual(jr(response_str)['err_c'], error.get_code())


def check_response_body(test_model: TestCase, response, expected: dict):
    response_str = response.content.decode("utf-8")
    test_model.assertEqual(jr(response_str), expected)


class AccountViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        sys_user = SystemUser.objects.create(username='user1', first_name='fn1', last_name='ln1',
                                             email='user1@gmail.com')
        sys_user.set_password('pw1')
        sys_user.save()
        foodstuff1 = Foodstuff.objects.create(name='Foodstuff1', price=10)
        foodstuff1.save()
        recipe = Recipe.objects.create(name='Recipe1', description='test', category=FoodCategory.KEBAB,
                                       difficulty=DifficultyType.MEDIUM, preparation_time=DurationType.MEDIUM,
                                       meal_tags='#test')
        recipe.save()

    def test_url_admin_exists(self):
        response = self.client.get('/admin', follow=True)
        self.assertEqual(response.status_code, 200)

    def test_valid_account_registration(self):
        request = dict(username='jf2023', password='pw2023', first_name='Jack', last_name='Frost',
                       email='jf2023@gmail.com')
        response = self.client.post('/api/accounts/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response)

    def test_existing_account_registration(self):
        request = dict(username='user1', password='pw2023', first_name='Jack', last_name='Frost',
                       email='user1_email@gmail.com')
        response = self.client.post('/api/accounts/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.ACCOUNT_EXISTS)

        request = dict(username='user1_backup', password='pw2023', first_name='Jack', last_name='Frost',
                       email='user1@gmail.com')
        response = self.client.post('/api/accounts/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.ACCOUNT_EXISTS)

    def test_valid_account_login(self):
        request = dict(username='user1', password='pw1')
        response = self.client.post('/api/accounts/login/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response)

    def test_not_existing_account_login(self):
        request = dict(username='false_user', password='false_password')
        response = self.client.post('/api/accounts/login/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.CREDENTIAL_MISMATCH)

    def test_valid_account_logout(self):
        request = dict(username='user1')
        response = self.client.put('/api/accounts/logout/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response)

    def test_not_existing_account_logout(self):
        request = dict(username='false_user')
        response = self.client.put('/api/accounts/logout/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.CREDENTIAL_MISMATCH)

    def test_valid_view_profile(self):
        expected = dict(email='user1@gmail.com', first_name='fn1', last_name='ln1', bio=None, role=1)
        response = self.client.get('/api/accounts/user1/profile/', follow=True)
        self.assertEqual(response.status_code, 200)
        check_response_body(self, response, expected)

    def test_invalid_view_profile(self):
        response = self.client.get('/api/accounts/false_user/profile/', follow=True)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.CREDENTIAL_MISMATCH)

    def test_valid_update_profile(self):
        request = dict(username='user1', first_name='newFn1', last_name='newLn1', bio='bio1', email='email1')
        response = self.client.post('/api/accounts/user1/profile/', request)
        self.assertEqual(response.status_code, 200)

    def test_invalid_update_profile(self):
        request = dict(username='false_user', first_name='newFn1', last_name='newLn1', bio='bio1', email='email1')
        response = self.client.post('/api/accounts/false_user/profile/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.CREDENTIAL_MISMATCH)

    def test_valid_create_ticket(self):
        request = dict(username='user1', category=TicketCategory.CHIEF_VERIFY.value)
        expected = dict(id=1)
        response = self.client.post('/api/tickets/', request)
        self.assertEqual(response.status_code, 200)
        check_response_body(self, response, expected)

    def test_invalid_create_ticket(self):
        request = dict(username='user2', category=TicketCategory.CHIEF_VERIFY.value)
        response = self.client.post('/api/tickets/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.ACCOUNT_NOT_FOUND)

    def test_valid_foodstuff_create(self):
        request = dict(name='beef', price=20)
        response = self.client.post('/api/foodstuff/create/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response)

    def test_existing_foodstuff_create(self):
        request = dict(name='Foodstuff1', price=20)
        response = self.client.post('/api/foodstuff/create/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.FOODSTUFF_EXISTS)

    def test_valid_ingredient_create(self):
        request = dict(name='Foodstuff1', number=100, unit=UnitType.GRAM.value)
        response = self.client.post('/api/ingredient/create/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response)

    def test_invalid_ingredient_create(self):
        request = dict(name='False_Foodstuff', number=100, unit=UnitType.GRAM.value)
        response = self.client.post('/api/ingredient/create/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.FOODSTUFF_NOT_FOUND)

    def test_existing_recipe_create(self):
        request = dict(name='Recipe1', description='test', category=FoodCategory.FAST_FOOD.value,
                       difficulty=DifficultyType.HARD.value, preparation_time=DurationType.FAST.value,
                       meal_tags='#test', ingredients='beef1-200-1,beef2-100-1')
        response = self.client.post('/api/recipe/create/', request)
        self.assertEqual(response.status_code, 200)
        check_internal_error(self, response, InternalError.RECIPE_EXIST)
