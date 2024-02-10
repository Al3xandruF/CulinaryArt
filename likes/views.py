from rest_framework import generics, permissions
from culinaryart.permissions import IsOwnerOrReadOnly
from likes.models import RecipeLike, RecipeCommentLike, RecipeSaved
from likes.serializers import (
    RecipeLikeSerializer,
    RecipeCommentLikeSerializer,
    RecipeSavedSerializer,
)


class RecipeLikeList(generics.ListCreateAPIView):
    """
    API endpoint for listing all recipe likes and create a
    new recipe like instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeLikeSerializer
    queryset = RecipeLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RecipeLikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific recipe like instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeLikeSerializer
    queryset = RecipeLike.objects.all()


class RecipeCommentLikeList(generics.ListCreateAPIView):
    """
    API endpoint to list all recipe comment likes and create a
    new recipe comment like instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeCommentLikeSerializer
    queryset = RecipeCommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RecipeCommentLikeDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific recipe
    comment like instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeCommentLikeSerializer
    queryset = RecipeCommentLike.objects.all()


class RecipeSavedList(generics.ListCreateAPIView):
    """
    API endpoint to list all saved recipes and create a
    new saved recipe instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeSavedSerializer
    queryset = RecipeSaved.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RecipeSavedDetail(generics.RetrieveDestroyAPIView):
    """
    API endpoint to retrieve or delete a specific saved recipe instance.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeSavedSerializer
    queryset = RecipeSaved.objects.all()
