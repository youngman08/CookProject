from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import SystemUserManager
from .enums import *
import os
from django.utils.deconstruct import deconstructible


class SystemUser(AbstractUser):
    USERNAME_FIELD = 'username'
    role = models.IntegerField(choices=Role.choices(), default=Role.PUBLIC, verbose_name='نقش')
    email = models.EmailField(verbose_name='ایمیل', unique=True)
    first_name = models.TextField(verbose_name='نام')
    last_name = models.TextField(verbose_name='نام خانوادگی')
    objects = SystemUserManager()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(username=self.username, email=self.email, first_name=self.first_name,
                              last_name=self.last_name, role=self.role)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.data_dict = dict(username=self.username, email=self.email, first_name=self.first_name,
                              last_name=self.last_name, role=self.role)

    def __str__(self):
        return f'User {self.first_name} {self.last_name}'


class Chief(models.Model):
    user = models.OneToOneField(SystemUser, on_delete=models.CASCADE)
    bio = models.CharField(verbose_name='شرح‌ حال', max_length=500, null=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(bio=self.bio)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(bio=self.bio)

    def __str__(self):
        return f'Chief {self.user.first_name} {self.user.last_name}'


class Ticket(models.Model):
    ticket_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(SystemUser, on_delete=models.CASCADE)
    category = models.IntegerField()
    status = models.IntegerField()
    text = models.TextField()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(id=self.ticket_id, username=self.user.username, text=self.text,
                              category=TicketCategory.get_category(self.category),
                              status=TicketStatus.get_status(self.status))

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(id=self.ticket_id, username=self.user.username, text=self.text,
                              category=TicketCategory.get_category(self.category),
                              status=TicketStatus.get_status(self.status))


class Foodstuff(models.Model):
    """
    Model for Foodstuff
    """
    name = models.CharField(verbose_name='نام قلم خوراکی', max_length=100, primary_key=True)
    price = models.FloatField(verbose_name='قیمت')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(name=self.name, price=self.price)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(name=self.name, price=self.price)

    def __str__(self) -> str:
        return f"{self.name}"


class Ingredient(models.Model):
    """
    Model for Ingredient
    """
    foodstuff = models.ForeignKey(Foodstuff, on_delete=models.CASCADE, verbose_name='قلم غذایی')
    amount = models.IntegerField(verbose_name='مقدار')
    unit = models.IntegerField(choices=UnitType.choices(), default=UnitType.GRAM, verbose_name='واحد')

    class Meta:
        unique_together = ['foodstuff', 'amount', 'unit']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(name=self.foodstuff.name, amount=self.amount, unit=self.unit)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(name=self.foodstuff.name, amount=self.amount, unit=self.unit)

    def __str__(self):
        return f'{self.amount} {UnitType.get_type(self.unit)} of {self.foodstuff.name}'

    def __repr__(self):
        return self.__str__()


@deconstructible
class PathRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        if isinstance(instance, Recipe):
            filename = f'Recipe_{instance.recipe_id}.{ext}'

        return os.path.join(self.path, filename)


class Recipe(models.Model):
    """
    Model for Recipe
    """
    recipe_id = models.AutoField(primary_key=True)
    chief = models.ForeignKey(Chief, on_delete=models.CASCADE, verbose_name='آشپز')
    name = models.CharField(verbose_name='نام', unique=True, max_length=100)
    ingredients = models.ManyToManyField(Ingredient, verbose_name='مواد لازم')
    category = models.IntegerField(choices=FoodCategory.choices(), default=FoodCategory.IRANIAN,
                                   verbose_name='دسته‌ی غذایی')
    description = models.TextField(verbose_name='توضیحات', max_length=1200)
    price = models.IntegerField(verbose_name='هزینه', default=0)
    difficulty = models.IntegerField(choices=DifficultyType.choices(), default=DifficultyType.MEDIUM,
                                     verbose_name='درجه سختی')
    preparation_time = models.IntegerField(choices=DurationType.choices(), default=DurationType.MEDIUM,
                                           verbose_name='مدت زمان آماده شدن')
    meal_tags = models.TextField(verbose_name='وعده‌های غذایی', max_length=150)
    photo = models.FileField(verbose_name="عکس غذا", null=True, upload_to=PathRename('recipes/'),
                             default='settings.MEDIA_ROOT/default_recipe.jpg')
    date_created = models.DateTimeField(auto_now=True)
    score = models.FloatField(verbose_name='امتیاز', default=0)
    rated_users = models.ManyToManyField(SystemUser, verbose_name='کاربران رای داده')
    rate = models.IntegerField(verbose_name='تعداد کاربران امتیاز دهنده', default=0)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(id=self.recipe_id, chief=self.chief.user.data_dict, description=self.description,
                              name=self.name, score=self.score, difficulty=self.difficulty, time=self.preparation_time,
                              rate=self.rate, price=self.price)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(id=self.recipe_id, chief=self.chief.user.data_dict, description=self.description,
                              name=self.name, score=self.score, difficulty=self.difficulty, time=self.preparation_time,
                              rate=self.rate, price=self.price)

    def __str__(self) -> str:
        return f"{self.name}"


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(SystemUser, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    text = models.TextField()
    date_posted = models.DateTimeField(auto_now=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(id=self.comment_id, user_first_name=self.user.first_name,
                              user_last_name=self.user.last_name, text=self.text, date=str(self.date_posted))

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(id=self.comment_id, user_first_name=self.user.first_name,
                              user_last_name=self.user.last_name, text=self.text, date=str(self.date_posted))

    def __str__(self) -> str:
        return f"{self.user.first_name} {self.user.last_name} on {self.recipe.name}: {self.text}"


class Forum(models.Model):
    forum_id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(Chief, on_delete=models.CASCADE)
    members = models.ManyToManyField(SystemUser, related_name='members')
    banned = models.ManyToManyField(SystemUser, related_name='banned')
    members_count = models.IntegerField(default=0)
    name = models.CharField(max_length=100)

    class Meta:
        unique_together = ['owner', 'name']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(id=self.forum_id, owner=self.owner.user.username, name=self.name,
                              members_count=self.members_count)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(id=self.forum_id, owner=self.owner.user.username, name=self.name,
                              members_count=self.members_count)

    def __str__(self) -> str:
        return f"Forum {self.name} by {self.owner.user}"


class ForumMessage(models.Model):
    message_id = models.AutoField(primary_key=True)
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE)
    sender = models.ForeignKey(SystemUser, on_delete=models.CASCADE)
    text = models.TextField()
    date_posted = models.DateTimeField(auto_now=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(sender=self.sender.username, text=self.text,
                              date=str(self.date_posted))

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(forum_id=self.forum_id, sender=self.sender.username, text=self.text,
                              date=str(self.date_posted))

    def __str__(self) -> str:
        return f"{self.sender} on {self.forum.name} at {self.date_posted}: {self.text}"


class Relationship(models.Model):
    id = models.AutoField(primary_key=True)
    jesus = models.ForeignKey(Chief, on_delete=models.CASCADE)
    disciple = models.ForeignKey(SystemUser, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['jesus', 'disciple']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.data_dict = dict(jesus=self.jesus.user.username, disciple=self.disciple.username)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save(force_insert, force_update, using, update_fields)
        self.data_dict = dict(jesus=self.jesus.user.username, disciple=self.disciple.username)

    def __str__(self) -> str:
        return f"{self.disciple} -> {self.jesus}"
