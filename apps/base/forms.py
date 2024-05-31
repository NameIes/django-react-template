from django.conf import settings
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from dj_rest_auth.forms import AllAuthPasswordResetForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ("username", "email",)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("username", "email",)
