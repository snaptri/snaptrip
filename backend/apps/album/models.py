from django.db import models
from apps.account.models import Account
from django.utils import timezone

class Album(models.Model):
    
    album_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relacion de album con account
    account_id = models.ForeignKey(Account , on_delete=models.CASCADE)

    def __str__(self):
        return self.album_name


class AlbumLike(models.Model):

    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('album','account')