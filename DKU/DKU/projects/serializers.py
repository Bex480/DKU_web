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
        leader = User(id=validated_data.pop('leader_id'))
        supervisor = User(id=validated_data.pop('supervisor_id'))
        leader.save()
        supervisor.save()

        project = Project(**validated_data)
        project.leader = leader
        project.supervisor = supervisor
        project.save()
        return project
