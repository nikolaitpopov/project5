from django.shortcuts import render
from pages.models import page
from rest_framework.viewsets import ModelViewSet
from pages.serializers import pagesSerializer
# Create your views here.
class Pages_View (ModelViewSet):
    queryset = page.objects.all()
    serializer_class = pagesSerializer