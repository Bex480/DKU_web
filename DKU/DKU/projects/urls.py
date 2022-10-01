from . import views
from django.urls import path

urlpatterns = [
    path('create/', views.CreateProject.as_view()),
    path('list/<current_status>/', views.ListProjects.as_view()),
    path('add/user/<pk>/', views.AddVolunteer.as_view()),
    path('add/category/<pk>/', views.AddCategory.as_view())
]
