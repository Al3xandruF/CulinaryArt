from django.db import IntegrityError
from rest_framework import serializers
from likes.models import Like, CommentLike, RecipeLike


class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the Like model
    The create method handles the unique constraint on 'owner' and 'post'
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Like
        fields = ["id", "created_at", "owner", "post"]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({"detail": "possible duplicate"})


class CommentLikeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = CommentLike
        fields = [
            "id",
            "created_at",
            "owner",
            "comment",
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({"detail": "it may be a dublicate"})


class RecipeLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the RecipeLike model.
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = RecipeLike
        fields = [
            "id",
            "created_at",
            "owner",
            "recipe",
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({"detail": "it may be a duplicate"})
