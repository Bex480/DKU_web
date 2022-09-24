from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializer


class Register(CreateAPIView):
    serializer_class = RegisterSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
