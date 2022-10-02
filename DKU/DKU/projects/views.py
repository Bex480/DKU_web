from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView
from .serializers import ProjectSerializer, ListSerializer
from django.core import serializers
from .models import Project, ProjectCategory
from django.contrib.auth.models import User


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
        serializer = serializers.serialize('json', Project.objects.filter(current_status=c_status))
        return serializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        return Response(queryset)


class AddVolunteer(UpdateAPIView):
    serializer_class = ListSerializer

    def patch(self, request, *args, **kwargs):
        pk = self.kwargs['pk']
        project = Project(id=pk)
        project.volunteers.add(request.user.id)
        return Response(status=status.HTTP_200_OK)


class AddCategory(UpdateAPIView):
    serializer_class = ListSerializer

    def patch(self, request, *args, **kwargs):
        category = ProjectCategory.objects.filter(name=request.data)
        pk = self.kwargs['pk']
        project = Project(id=pk)
        for item in category:
            project.category.add(item.id)
        return Response(status=status.HTTP_200_OK)
