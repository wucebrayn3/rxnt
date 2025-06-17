from django.contrib import admin
from .models import PublicPost, PrivateMessage

# Register your models here.

admin.site.register(PublicPost)
admin.site.register(PrivateMessage)