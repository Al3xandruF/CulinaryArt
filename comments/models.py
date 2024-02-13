from django.db import models
from django.contrib.auth.models import User
from recipes.models import Recipe


class RecipeComment(models.Model):
    """
    Representation of a comment made by a regular user/ chef on a Recipe.
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, null=True, on_delete=models.CASCADE)
    main_comment = models.ForeignKey(
        "self",
        null=True,
        blank=True,
        related_name="replies_to_comment",
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.content


class RecipeCommentReply(models.Model):
    """
    Representation of a reply made by a regular user/ chef on a Recipe.
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, null=True, on_delete=models.CASCADE)
    main_comment = models.ForeignKey(
        RecipeComment,
        related_name="replies_to_reply",
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.content
