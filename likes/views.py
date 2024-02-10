from rest_framework import generics, permissions
from culinaryart.permissions import IsOwnerOrReadOnly
from likes.models import RecipeLike, RecipeCommentLike, RecipeSaved
from likes.serializers import (
    RecipeLikeSerializer,
    RecipeCommentLikeSerializer,
    RecipeSavedSerializer,
)


class LikeList(generics.ListCreateAPIView):
    """
    List likes or create a like if logged in.
    """

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LikeDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a like or delete it by id if you own it.
    """

    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()
