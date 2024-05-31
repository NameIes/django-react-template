from django.conf import settings
from urllib.parse import quote
from allauth.account.adapter import DefaultAccountAdapter


class ReactAccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        return settings.CONFIRM_EMAIL_FRONTEND_URL + '?key=' + emailconfirmation.key

    def get_reset_password_from_key_url(self, key):
        parsed = quote(key)
        print(parsed)
        return settings.RESET_PASSWORD_FRONTEND_URL
