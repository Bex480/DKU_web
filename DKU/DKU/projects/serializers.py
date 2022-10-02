from rest_framework import serializers
from .models import Project, ProjectCategory


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = [
            'title',
            'description',
            'max',
            'begins',
            'ends',
            'current_status',
            'leader',
            'supervisor',
        ]

    def create(self, validated_data):
        project = Project(**validated_data)
        project.save()
        return project


class ListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectCategory
        fields = '__all__'
