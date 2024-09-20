from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from apps.album.models import Album, AlbumLike
from apps.album.serializer import AlbumSerializer, AlbumLikeSerializer

class AlbumListCreateAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(account=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AlbumDetailAPIView(APIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    permission_classes = [permissions.AllowAny]

    def get_object(self, pk):
        try:
            return Album.objects.get(pk=pk)
        except Album.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        album = self.get_object(pk)
        serializer = AlbumSerializer(album)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        album = self.get_object(pk)
        if album.account != request.user:
            return Response({'detail': 'You do not have permission to edit this album.'}, status=status.HTTP_403_FORBIDDEN)
        serializer = AlbumSerializer(album, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD)
    
    def delete(self, request, pk):
        album = self.get_object(pk)
        if album.account != request.user:
            return Response({'detail': 'You do not have permission to delete this album.'}, status=status.HTTP_403_FORBIDDEN)
        album.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AlbumLikeAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]

    def post(self, request, album_id):

        try:
            album = Album.objects.get(pk=album_id)
        except Album.DoesNotExist:
            return Response({'detalle': 'Album no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        if AlbumLike.objects.filter(user=request.user, album=album).exists():
            return Response({'detalle': 'Ya le diste like a este album'}, status=status.HTTP_400_BAD_REQUEST)
        
        like = AlbumLike(user=request.user, album=album)
        like.save()
        serializer = AlbumLikeSerializer(like)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, album_id):

        try:
            album = Album.objects.get(pk=album_id)
        except Album.DoesNotExist:
            return Response({'detalle': 'Album no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
        try:
            like = AlbumLike.objects.get(user=request.user, album=album)
        except AlbumLike.DoesNotExist:
            return Response({'detalle': 'You have not liked this album.'}, status=status.HTTP_400_BAD_REQUEST)

        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
