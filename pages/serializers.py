from rest_framework import serializers

from pages.models import page


class pagesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = page
        fields = ['title', 'content']