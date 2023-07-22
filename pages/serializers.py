from rest_framework import serializers

from pages.models import page, paragraph


class pagesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = page
        fields = ['title', 'content']

class paragraphSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = paragraph
        fields = ['content', 'parent', 'page', 'id']