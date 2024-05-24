from django.contrib.auth import get_user_model

from apps.base.tests import BaseTest


class UsersManagersTests(BaseTest):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(username="normaluser", password="foo")
        self.assertEqual(user.username, "normaluser")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        with self.assertRaises(TypeError):
            User.objects.create_user()  # type: ignore
        with self.assertRaises(ValueError):
            User.objects.create_user(username="", password="foo")

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(username="superuser", password="foo")
        self.assertEqual(admin_user.username, "superuser")
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        with self.assertRaises(ValueError):
            User.objects.create_superuser(username="superuser", password="foo", is_superuser=False)
