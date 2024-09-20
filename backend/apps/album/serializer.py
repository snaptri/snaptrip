from rest_framework import serializers
from apps.album.models import Album, AlbumLike

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'
        read_only_fields = ['account_id', 'created_at', 'updated_at']

class AlbumLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = AlbumLike
        fields = '__all__'