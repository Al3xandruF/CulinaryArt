from django.db.models import Count
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from culinaryart.permissions import IsOwnerOrReadOnly, IsChefOrReadOnly
from .models import Recipe
from .serializers import RecipeSerializer


class RecipeList(generics.ListCreateAPIView):
    """
    API endpoint for listing and create Recipe instances.
    """

    serializer_class = RecipeSerializer
    permission_classes = [IsChefOrReadOnly]
    queryset = Recipe.objects.annotate(
        likes_count=Count("likes", distinct=True),
        saved_count=Count("saved", distinct=True),
        comments_count=Count("recipecomment", distinct=True),
    ).order_by("-created_at")
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        "owner__followed__owner__profile",
        "likes__owner__profile",
        "owner__profile",
    ]
    search_fields = [
        "owner__username",
        "title",
    ]
    ordering_fields = [
        "likes_count",
        "comments_count",
        "likes__created_at",
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a post and edit or delete it if you own it.
    """

    serializer_class = RecipeSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Recipe.objects.annotate(
        comments_count=Count("recipecomment", distinct=True),
        likes_count=Count("likes", distinct=True),
        saved_count=Count("saved", distinct=True),
    ).order_by("-created_at")
