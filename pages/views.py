from django.shortcuts import render
from pages.models import page
from rest_framework import viewsets
from pages.serializers import pagesSerializer
# Create your views here.
class Pages_View (viewsets.ModelViewSet):
    queryset = page.objects.all()
    serializer_class = pagesSerializer