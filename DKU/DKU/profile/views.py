from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.core import serializers
from django.contrib.auth.models import User
from .serializers import ProfileSerializer


class GetUser(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get(self, request, *args, **kwargs):
        serializer = ProfileSerializer(request.user).data
        return Response(serializer)
