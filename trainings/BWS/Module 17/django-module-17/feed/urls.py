from django.urls import path
from . import views

app_name = 'feed'

urlpatterns = [
    path('', views.HomePageView.as_view(), name='index'),
    path('<int:pk>/', views.PostDetailView.as_view(), name='detail'),
    path('new/', views.CreateNewPostView.as_view(), name='new_post'),
    path('account/', views.AccountSettingsView.as_view(), name='account_settings'),
]