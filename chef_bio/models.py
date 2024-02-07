from django.db import models
from django.contrib.auth.models import User


class ChefBio(models.Model):
    """
    Chef Profile user bio details.
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    chef_title = models.CharField(max_length=255, blank=True)
    place_of_birth = models.CharField(max_length=255, blank=True)
    cooking_school = models.CharField(max_length=255, blank=True)
    speciality_dish = models.CharField(max_length=255, blank=True)
    achievements = models.TextField(blank=True)
    web_address = models.models.EmailField(max_length=254, blank=True)

    def __str__(self):
        return f"{self.owner}'s Chef Bio"