from django.shortcuts import render
from pages.models import page, paragraph
from rest_framework import viewsets
from pages.serializers import pagesSerializer, paragraphSerializer
# Create your views here.
class Pages_View (viewsets.ModelViewSet):
    # queryset = page.objects.all()
    # serializer_class = pagesSerializer
    queryset = paragraph.objects.all()
    serializer_class = paragraphSerializer