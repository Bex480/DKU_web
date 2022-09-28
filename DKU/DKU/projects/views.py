from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListAPIView
from .serializers import ProjectSerializer, ListSerializer
from .models import Project


class CreateProject(CreateAPIView):
    serializer_class = ProjectSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(status=status.HTTP_201_CREATED)


class ListProjects(ListAPIView):
    serializer_class = ListSerializer

    def get_queryset(self):
        c_status = self.kwargs['current_status']
        serializer = self.get_serializer(Project.objects.filter(current_status=c_status))
        return serializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        return Response(queryset)
