from rest_framework.serializers import ModelSerializer

from pages.models import page


class pagesSerializer(ModelSerializer):
    class Meta:
        model = page
        fields = ['title', 'content']