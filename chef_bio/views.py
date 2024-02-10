from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, permissions
from devexchange.permissions import IsChefOrReadOnly, IsOwnerOrReadOnly
from .models import ChefBio
from .serializers import ChefBioSerializer


class ChefBioList(generics.ListCreateAPIView):
    """
    API endpoint to list and create CompanyBio instances.
    """

    queryset = ChefBio.objects.all()
    serializer_class = ChefBioSerializer
    permission_classes = [IsChefOrReadOnly]

    filterset_fields = [
        "owner__profile",
    ]

    def perform_create(self, serializer):
        # Automatically set the owner to the current user
        serializer.save(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError as e:
            return Response(
                {"error": "You already have a chef bio."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class ChefBioDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint to CRUD a specific ChefBio instance.
    """

    queryset = ChefBio.objects.all()
    serializer_class = ChefBioSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
