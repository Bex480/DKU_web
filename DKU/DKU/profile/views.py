from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import ProfileSerializer
from django.core import serializers
from django.contrib.auth.models import User


class GetUser(RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = ProfileSerializer(request.user).data
        return Response(serializer)


class GetSupervisors(ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        serializer = ProfileSerializer(User.objects.filter(is_staff=True))
        return serializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        return Response(queryset)
