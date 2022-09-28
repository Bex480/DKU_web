from . import views
from django.urls import path

urlpatterns = [
    path('create/', views.CreateProject.as_view()),
    path(r'^list/<current_status>$/', views.ListProjects.as_view())
]
