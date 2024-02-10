from rest_framework import generics, permissions, status
from django.db.models import Count
from django.http import Http404
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from culinaryart.permissions import IsOwnerOrReadOnly
from .models import RecipeComment, RecipeCommentReply
from .serializers import (
    RecipeCommentSerializer,
    RecipeCommentDetailSerializer,
    RecipeCommentReplySerializer,
)


class RecipeCommentList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating comments.
    """

    serializer_class = RecipeCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = RecipeComment.objects.annotate(
        comment_likes_count=Count("likes", distinct=True)
    ).order_by("-created_at")
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = ["recipe"]
    ordering_fields = [
        "comment_likes_count",
        "comment_likes_created_at",
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RecipeCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows CRUD to comment.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeCommentDetailSerializer
    queryset = RecipeComment.objects.all()


class RecipeCommentReplyList(generics.ListCreateAPIView):
    """
    API endpoint that allows listing and creating replies for comments.
    """

    serializer_class = RecipeCommentReplySerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        parent_comment_id = self.kwargs["parent_comment_id"]
        queryset = RecipeCommentReply.objects.filter(
            parent_comment__id=parent_comment_id
        )
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        if queryset.exists():
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif RecipeComment.objects.filter(id=self.kwargs["parent_comment_id"]).exists():
            return Response([], status=status.HTTP_200_OK)
        else:
            return Response(
                {"message": "Invalid replies url"}, status=status.HTTP_404_NOT_FOUND
            )

    def perform_create(self, serializer):
        # Associating the reply with a parent comment
        parent_comment_id = self.kwargs["parent_comment_id"]
        parent_comment = RecipeComment.objects.get(pk=parent_comment_id)
        serializer.save(owner=self.request.user, parent_comment=parent_comment)


class RecipeCommentReplyDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that performs CRUD to comment reply.
    """

    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = RecipeCommentReplySerializer
    queryset = RecipeCommentReply.objects.all()
