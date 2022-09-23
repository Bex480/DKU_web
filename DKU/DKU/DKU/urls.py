
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from DKU.register.views import Register

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('registar', TemplateView.as_view(template_name='index.html')),
    path('kontakt', TemplateView.as_view(template_name='index.html')),
    path('projekti', TemplateView.as_view(template_name='index.html')),
    path('api/', include('api.urls')),

    path('register', Register.as_view())
]

