from django.db import IntegrityError
from rest_framework import serializers
from likes.models import RecipeLike, RecipeCommentLike, RecipeSaved


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


class RecipeCommentLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for the RecipeCommentLike model.
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = RecipeCommentLike
        fields = [
            "id",
            "created_at",
            "owner",
            "recipe_comment",
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({"detail": "possible duplicate"})


class RecipeSavedSerializer(serializers.ModelSerializer):
    """
    Serializer for the RecipeSaved model.
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = RecipeSaved
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
            raise serializers.ValidationError({"detail": "possible duplicate"})
