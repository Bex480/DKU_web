from rest_framework import serializers
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'date_joined',
            'is_staff'
        ]
