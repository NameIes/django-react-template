from django.conf import settings

from allauth.account.adapter import DefaultAccountAdapter


class ReactAccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        return settings.CONFIRM_EMAIL_FRONTEND_URL + "?key=" + emailconfirmation.key
