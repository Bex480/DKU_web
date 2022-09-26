from django.db import models
from django.contrib.auth.models import User


class ProjectCategory(models.Model):
    name = models.CharField(max_length=30)


class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    category = models.ManyToManyField(ProjectCategory)
    leader = models.ForeignKey(User, related_name="leader", null=True, on_delete=models.SET_NULL)
    supervisor = models.ForeignKey(User, related_name="supervisor", null=True, on_delete=models.SET_NULL)
    max = models.PositiveIntegerField()
    volunteers = models.ManyToManyField(User)
    begins = models.DateTimeField()
    ends = models.DateTimeField()
    planned = models.BooleanField()
    active = models.BooleanField()
    archived = models.BooleanField()
