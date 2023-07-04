from django.urls import path, include

from users.views import register

urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('register/', register.as_view(), name = 'register')

]