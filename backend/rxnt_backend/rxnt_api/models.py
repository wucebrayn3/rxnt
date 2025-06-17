from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class PublicPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    
class PrivateMessage(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sent")
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name="received")
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def as_anon(self): # anonymous
        return {
            "content": self.content,
            "timestamp": self.timestamp,
        }
