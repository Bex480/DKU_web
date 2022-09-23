from . import views
from django.urls import path


urlpatterns = [
    path('', views.Register.as_view()),
]
