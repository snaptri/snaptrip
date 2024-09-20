from django.db import models
from django.conf import settings
from apps.account.models import Account


class Event(models.Model):

    event_name = models.CharField(max_length=100)
    event_description = models.TextField()
    event_location = models.CharField(max_length=255)
    event_start = models.DateTimeField()
    event_end = models.DateTimeField()
    attend = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relacion de account con event
    account_id = models.ForeignKey(Account, on_delete=models.CASCADE)


    def __str__(self):
        return self.event_name
    
    def formatted_created_at(self):
        return self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def formatted_updated_at(self):
        return self.updated_at.strftime('%Y-%m-%d %H:%M:%S')
    
    

class EventHistory(models.Model):

    attended = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relacion de account con EventHistory
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    # Relacion de event con EventHistory
    event = models.ForeignKey(Event, on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.account.username} - {self.event.event_name}'