from django.contrib.auth.base_user import BaseUserManager
from .enums import Role


class SystemUserManager(BaseUserManager):
    def _create_user(self, username, password, role, **kwargs):
        if not username or not password:
            raise ValueError('The credentials must be set')
        user = self.model(username=username, role=role, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, username, password=None, **kwargs):

        kwargs.setdefault('is_staff', False)
        kwargs.setdefault('is_superuser', False)
        return self._create_user(username, password, role=Role.PUBLIC, **kwargs)


    def create_superuser(self, username, password, **kwargs):
        
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, password, role=Role.ADMIN, **kwargs)

