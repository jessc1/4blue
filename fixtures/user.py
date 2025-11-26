import pytest
from core.models import User

test_user = {
    "username": "test_user",
    "email": "usertest@email.com",
    "password": "userpassword"
}

@pytest.fixture
def user(db) -> User:
    return User.objects.create_superuser(**test_user)
