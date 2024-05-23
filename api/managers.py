from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):  # type: ignore
    """Custom user model manager."""

    def create_user(self, username: str, password: str, email: str|None = None, **extra_fields):
        """Create and save a User with the given username, email and password."""
        if not username:
            raise ValueError("The Username must be set")
        if email:
            email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username: str, password: str, email: str|None = None, **extra_fields):
        """Create and save a User with superuser permissions."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(username, email, password, **extra_fields)
