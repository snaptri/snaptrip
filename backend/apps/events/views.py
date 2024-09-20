from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, permissions
from apps.events.models import Event, EventHistory
from apps.events.serializer import EventSerializer, EventHistorySerializer
from apps.events.models import Account

class EventViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    permission_classes = [permissions.AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        previous_attend = instance.attend
        response = super().update(request, *args, **kwargs)
        
        # Comprobar si la instancia se actualizó correctamente
        instance.refresh_from_db()
        
        if not previous_attend and instance.attend:
            # Crear un registro en EventHistory si el usuario decide asistir
            EventHistory.objects.get_or_create(
                event=instance,
                # account=request.user,
                account=request.account,
                attended=True
            )
        elif previous_attend and not instance.attend:
            # Eliminar el registro en EventHistory si el usuario decide no asistir
            # EventHistory.objects.filter(event=instance, account=request.user).delete()
            EventHistory.objects.filter(event=instance, account=request.account).delete()
        
        return response

class EventHistoryViewSet(viewsets.ModelViewSet):
    queryset = EventHistory.objects.all()
    serializer_class = EventHistorySerializer