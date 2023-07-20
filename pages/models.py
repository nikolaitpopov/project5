from django.db import models
from users.models import User

# Create your models here.
class page (models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return self.title

class paragraph(models.Model):
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    parent = models.ForeignKey('self',on_delete=models.SET_NULL, null=True,default=0, blank=True)
    page = models.ForeignKey(page, on_delete=models.CASCADE, default=0)