from .models import User, Chat
from rest_framework import status
from fixtures.user import user
from fixtures.chat import chat
from configtest import client
import pytest


class TestChatViewSet:
    endpoint = '/api/chat/'

    @pytest.mark.django_db
    def test_chat_history(self, user, client, chat):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        

    def test_send_message(self,client, user, chat):
        client.force_authenticate(user=user)
        data = {"message": "message test"}
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_201_CREATED
        
    

        
