from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.core import serializers
from django.contrib.auth.models import User
from .serializers import ProfileSerializer


class GetUser(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        user = self.kwargs['username']
        serializer = serializers.get_serializer(User.objects.filter(username=user))
        return serializer

    def get(self, request, *args, **kwargs):
        profile = self.get_object()
        return Response(profile)
