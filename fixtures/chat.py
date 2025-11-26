from core.models import Chat
from fixtures.user import user

import pytest

@pytest.fixture
def chat(db, user):
    return Chat.objects.create(user=user,message="Message Test")
