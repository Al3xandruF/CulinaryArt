from django.db import models
from chef_bio.models import ChefBio


class Recipe(models.Model):
    """
    Recipe model, related to 'owner'
    """

    difficulty_choices = [
        ("1", "1"),
        ("2", "2"),
        ("3", "3"),
        ("4", "4"),
        ("5", "5"),
    ]

    image_filter_choices = []

    owner = models.ForeignKey(ChefBio, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    recipe_title = models.CharField(max_length=255)
    recipe_description = models.TextField(blank=True)
    ingredients = models.TextField(blank=True)
    cooking_time = models.DurationField()
    difficulty = models.CharField(
        max_length=50,
        choices=difficulty_choices,
        default=1,
    )
    servings = models.IntegerField()
    calories = models.IntegerField()
    image = models.ImageField(
        choices=image_filter_choices,
        upload_to=None,
        height_field=None,
        width_field=None,
        max_length=32,
        default="normal",
    )
    recipe_preparation = models.TextField(blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.id} {self.title}"
