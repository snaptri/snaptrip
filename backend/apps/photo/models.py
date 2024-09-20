from django.db import models
from apps.account.models import Account
from apps.camera.models import Camera
from apps.lens.models import Lens
from apps.album.models import Album

class Photo(models.Model):

    photo_name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    photo_url = models.URLField(default=1)
    taken_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relacion de album con photo
    album_id = models.ForeignKey(Album, on_delete=models.CASCADE)

    # Relacion de account con photo
    account = models.ForeignKey(Account, on_delete=models.CASCADE, default=1)

    # Relacion de camera con photo 
    camera_id =models.ForeignKey(Camera, on_delete=models.CASCADE)

    # Relacion de lens con photo
    lens_id = models.ForeignKey(Lens, on_delete=models.CASCADE)


class PhotoLike(models.Model):

    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('photo', 'account')