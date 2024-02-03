from rest_framework import serializers
from recipes.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source="owner.profile.id")
    profile_image = serializers.ReadOnlyField(source="owner.profile.image.url")
    like_id = serializers.SerializerMethodField()
    likes_count = serializers.ReadOnlyField()
    comments_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context["request"]
        return request.user == obj.owner

    def get_like_id(self, obj):
        user = self.context["request"].user
        if user.is_authenticated:
            like = RecipeLike.objects.filter(owner=user, job_post=obj).first()
            return like.id if like else None
        return None

    class Meta:
        model = Recipe
        fields = (
            "id",
            "owner",
            "is_owner",
            "profile_id",
            "profile_image",
            "like_id",
            "likes_count",
            "comments_count",
            "created_at",
            "updated_at",
            "title",
            "description",
            "preparation",
            "cook",
            "difficulty",
            "servings",
            "calories",
        )
