from django.contrib.auth import views
from django.urls import path

urlpatterns = [
    path('', views.PasswordResetView.as_view()),
]
