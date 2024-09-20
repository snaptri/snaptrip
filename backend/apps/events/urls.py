from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.events.views import EventViewSet, EventHistoryViewSet, EventLikeViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'event_histories', EventHistoryViewSet)
router.register(r'event-likes', EventLikeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]