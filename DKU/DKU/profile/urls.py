from . import views
from django.urls import path


urlpatterns = [
    path('<username>/', views.GetUser.as_view()),
]
