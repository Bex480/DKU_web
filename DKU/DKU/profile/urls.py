from . import views
from django.urls import path


urlpatterns = [
    path('', views.GetUser.as_view()),
]
