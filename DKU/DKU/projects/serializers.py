from rest_framework import serializers
from .models import Project, ProjectCategory
from django.contrib.auth.models import User


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = [
            'title',
            'description',
            'max',
            'begins',
            'ends',
            'planned',
            'active',
            'archived',
            'leader',
            'supervisor',
        ]

    def create(self, validated_data):
        project = Project(**validated_data)
        project.save()
        return project
