from django.urls import path
from comments import views

urlpatterns = [
    path("recipe-comments/", views.RecipeCommentList.as_view()),
    path("recipe-comments/<int:pk>/", views.RecipeCommentDetail.as_view()),
    path(
        "recipe-comment-replies/<int:parent_comment_id>/",
        views.RecipeCommentReplyList.as_view(),
    ),
    path(
        "recipe-comment-replies/<int:parent_comment_id>/<int:pk>/",
        views.RecipeCommentReplyDetail.as_view(),
    ),
]
