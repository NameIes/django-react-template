from api.tests import BaseTest


class TestIndexView(BaseTest):
    def test_index(self):
        self.get('index')
        self.assert_http_200_ok()
