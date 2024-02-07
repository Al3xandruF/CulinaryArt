from django.db import models
from django.contrib.auth.models import User

"""from posts.models import Post"""
from recipes.models import Recipe
from comments.models import RecipeComment


"""
class Like(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name="likes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "post"]

    def __str__(self):
        return f"{self.owner} {self.post}"


class CommentLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, related_name="likes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "comment"]

    def __str__(self):
        return f"{self.owner} likes {self.comment}"
"""


class RecipeLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, related_name="likes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "recipe"]

    def __str__(self):
        return f"{self.owner} {self.recipe}"


class RecipeCommentLike(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe_comment = models.ForeignKey(
        RecipeComment, related_name="likes", on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=False)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "recipe_comment"]

    def __str__(self):
        return f"{self.owner} likes {self.recipe_comment}"


class RecipeSaved(models.Model):
    """
    Model representation of Saving a Recipe.
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, related_name="saved", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "recipe"]

    def __str__(self):
        return f"{self.owner} {self.recipe}"
