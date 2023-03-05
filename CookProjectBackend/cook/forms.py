from django.contrib.auth.forms import UserCreationForm
from .models import SystemUser


class User_Creation_Form(UserCreationForm):
    class Meta:
        model = SystemUser
        fields = "__all__"
