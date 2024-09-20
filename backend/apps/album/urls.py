from django.urls import path
from apps.album.views import AlbumListCreateAPIView, AlbumDetailAPIView

urlpatterns = [
    path('albums/', AlbumListCreateAPIView.as_view(), name='album-list-create'),
    path('albums/<int:pk>/', AlbumDetailAPIView.as_view(), name='album-detail'),
]