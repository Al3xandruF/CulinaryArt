from django.urls import path
from likes import views

urlpatterns = [
    path("likes/", views.LikeList.as_view()),
    path("likes/<int:pk>/", views.LikeDetail.as_view()),
    path("recipe-likes/", views.RecipeLikeList.as_view()),
    path("recipe-likes/<int:pk>/", views.RecipeLikeDetail.as_view()),
    path("recipe-comment-likes/", views.RecipeCommentLikeList.as_view()),
    path("recipe-comment-likes/<int:pk>/", views.RecipeCommentLikeDetail.as_view()),
    path("recipe-saved/", views.RecipeSavedList.as_view()),
    path("recipe-saved/<int:pk>/", views.RecipeSavedDetail.as_view()),
]
