from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import User_Creation_Form
from .models import SystemUser


class SystemAdmin(UserAdmin):
    model = SystemUser
    add_form = User_Creation_Form


admin.site.register(SystemUser, SystemAdmin)
