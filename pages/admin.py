from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import page, paragraph

admin.site.register(page)
admin.site.register(paragraph)