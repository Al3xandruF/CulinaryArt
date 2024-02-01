from rest_framework import serializers
from recipes.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    title = serializers.CharField(max_length=255)
    description = serializers.TextField()
    preparation = serializers.IntegerField()
    cook = serializers.IntegerField()
    difficulty = serializers.CharField(max_length=50)
    servings = serializers.IntegerField()
    calories = serializers.IntegerField()

    def get_is_owner(self, obj):
        request = self.context["request"]
        return request.user == obj.owner

    class Meta:
        model = Recipe
        fields = (
            "id",
            "owner",
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
