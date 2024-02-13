from rest_framework import serializers
from .models import ChefBio


class ChefBioSerializer(serializers.ModelSerializer):
    """
    Serializer for ChefBio model serializations process.
    """

    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    chef_title = serializers.CharField(max_length=255, required=False)
    place_of_birth = serializers.CharField(max_length=255, required=False)
    cooking_school = serializers.CharField(max_length=255, required=False)
    speciality_dish = serializers.CharField(allow_blank=True, required=False)
    achievements = serializers.CharField(allow_blank=True, required=False)
    web_address = serializers.EmailField(
        max_length=254, allow_blank=True, required=False
    )

    def get_is_owner(self, obj):
        request = self.context["request"]
        return request.user == obj.owner

    class Meta:
        model = ChefBio
        fields = [
            "id",
            "owner",
            "is_owner",
            "chef_title",
            "place_of_birth",
            "cooking_school",
            "speciality_dish",
            "achievements",
            "web_address",
        ]
