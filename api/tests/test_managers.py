from django.contrib.auth import get_user_model

from api.tests import BaseTest


class TestUsersManagers(BaseTest):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            username="normal_user",
            email="normal@user.com",
            password="qw4r1qfyh3asdXV",
        )
        self.assertEqual(user.username, "normal_user")
        self.assertEqual(user.email, "normal@user.com")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        with self.assertRaises(TypeError):
            User.objects.create_user()  # type: ignore
        with self.assertRaises(ValueError):
            User.objects.create_user(username="", email="normal2@user.com", password="qw4r1qfyh3asdXV")

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            username="admin_user",
            email="admin@user.com",
            password="qw4r1qfyh3asdXV",
        )
        self.assertEqual(admin_user.username, "admin_user")
        self.assertEqual(admin_user.email, "admin@user.com")
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                username="admin_user",
                email="admin@user.com",
                password="qw4r1qfyh3asdXV",
                is_superuser=False,
            )
