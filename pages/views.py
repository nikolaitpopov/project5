from django.shortcuts import render
from pages.models import page, paragraph
from rest_framework import viewsets
from pages.serializers import pagesSerializer
# Create your views here.
class Pages_View (viewsets.ModelViewSet):
    queryset = page.objects.all()
    serializer_class = pagesSerializer

class Paragraphs_View (viewsets.ModelViewSet):
    queryset = paragraph.objects.all()
    serializer_class = pagesSerializer