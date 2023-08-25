from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path("login/", views.LoginView.as_view(), name="login"),
    path("register/", views.RegisterView.as_view(), name="register"),
    path("me/", views.UserDataView.as_view(), name="me"),
    path("activation/<uuid64>/<token>/", views.activation_view, name="activation"),
    path("csrf/", views.RegisterView.as_view(), name="register"),
    path("infos/", views.UpdateUserProfile.as_view(),name="infos")

]