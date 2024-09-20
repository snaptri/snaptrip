from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, permissions
from apps.events.models import Event, EventHistory, EventLike
from apps.events.serializer import EventSerializer, EventHistorySerializer, EventLikeSerializer
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

class EventLikeViewSet(viewsets.ModelViewSet):
    queryset = EventLike.objects.all()
    serializer_class = EventLikeSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        event_id = request.data.get('event')
        account = request.account

        if EventLike.objects.filter(event_id=event_id, account=account).exists():
            return Response({"detail": "Ya le diste like a este evento"}, status=status.HTTP_400_BAD_REQUEST)

        event_like = EventLike.objects.create(event_id=event_id, account=account)
        serializer = self.get_serializer(event_like)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def unlike(self, request):
        event_id = request.data.get('event')
        account = request.user

        like = EventLike.objects.filter(event_id=event_id, account=account).first()
        if not like:
            return Response({"detail": "You have not liked this event."}, status=status.HTTP_400_BAD_REQUEST)

        like.delete()
        return Response({"detail": "Quitaste el like de este evento"}, status=status.HTTP_204_NO_CONTENT)
