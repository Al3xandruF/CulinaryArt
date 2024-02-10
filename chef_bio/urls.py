from django.urls import path
from chef_bio import views

urlpatterns = [
    path("chef-bio/", views.ChefBioList.as_view()),
    path("chef-bio/<int:pk>/", views.ChefBioDetail.as_view()),
]
