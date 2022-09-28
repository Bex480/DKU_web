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
            'planned',
            'active',
            'archived',
            'leader_id',
            'supervisor_id',
        ]

    def create(self, validated_data):
        project = Project(**validated_data)
        project.save()
        return project
