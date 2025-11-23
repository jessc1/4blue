from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    email = models.CharField(max_length=250,unique=True)

    @property
    def fullname(self):
        return "{self.first_name} {self.last_name}"


class Chat(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    message = models.TextField(null=True,blank=True)
    response = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Chat with {self.user.username}"
