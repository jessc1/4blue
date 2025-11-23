from rest_framework import routers
from .viewsets import ChatViewSet

router = routers.SimpleRouter()

router.register(r'chat', ChatViewSet, basename='chat')
router.register(r'history',ChatViewSet, basename='history')
urlpatterns = [
    *router.urls,
]
