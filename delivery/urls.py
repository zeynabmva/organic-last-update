from django.urls import path
from . import views

urlpatterns = [
    # Digər URL-ləri burada əlavə edin
    path('api/create-delivery/', views.CreateDeliveryInformation.as_view(), name='create-delivery'),
    # path('api/create-card/', views.CreateCardInformation.as_view(), name='create-card'),
]