from django.db import models
from django.contrib.auth.models import User


class Recipe(models.Model):
    """
    Recipe model, related to 'owner'
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    preparation = models.IntegerField()
    cook = models.IntegerField()
    difficulty = models.CharField(max_length=50)
    servings = models.IntegerField()
    calories = models.IntegerField()

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.id} {self.title}"
