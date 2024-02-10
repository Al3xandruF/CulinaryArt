from rest_framework import serializers
from .models import RecipeComment, RecipeCommentReply
from likes.models import RecipeLike, RecipeCommentLike


class RecipeCommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source="owner.profile.id")
    profile_image = serializers.ReadOnlyField(source="owner.profile.image.url")
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    comment_like_id = serializers.SerializerMethodField()
    comment_likes_count = serializers.ReadOnlyField()
    replies = serializers.SerializerMethodField()

    # Method to check if the user is the owner of the recipe comment
    def get_is_owner(self, obj):
        request = self.context["request"]
        return request.user == obj.owner

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    # Retrieving like id
    def get_comment_like_id(self, obj):
        user = self.context["request"].user
        if user.is_authenticated:
            comment_like = RecipeCommentLike.objects.filter(
                owner=user, recipe_comment=obj
            ).first()
            return comment_like.id if comment_like else None
        return None

    def get_replies(self, obj):
        # Retrieve the replies for this comment using Comment/Reply model
        replies_comment_model = RecipeComment.objects.filter(parent_comment=obj)

        replies_reply_model = RecipeCommentReply.objects.filter(parent_comment=obj)

        reply_content_comment_model = [reply.content for reply in replies_comment_model]

        reply_content_reply_model = [reply.content for reply in replies_reply_model]

        # Content from both models
        all_reply_content = reply_content_comment_model + reply_content_reply_model

        return all_reply_content

    class Meta:
        model = RecipeComment
        fields = (
            "id",
            "owner",
            "is_owner",
            "recipe",
            "profile_id",
            "profile_image",
            "updated_at",
            "created_at",
            "content",
            "comment_like_id",
            "comment_likes_count",
            "replies",
        )


class RecipeCommentDetailSerializer(RecipeCommentSerializer):
    recipe = serializers.ReadOnlyField(source="recipe.id")


class RecipeCommentReplySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source="owner.profile.id")
    profile_image = serializers.ReadOnlyField(source="owner.profile.image.url")

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = RecipeCommentReply
        fields = [
            "id",
            "owner",
            "created_at",
            "updated_at",
            "parent_comment",
            "content",
            "profile_image",
            "profile_id",
        ]
