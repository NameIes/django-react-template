from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):  # type: ignore
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "email",
        )


class CustomUserChangeForm(UserChangeForm):  # type: ignore
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "email",
        )
