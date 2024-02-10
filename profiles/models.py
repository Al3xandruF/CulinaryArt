from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    image = models.ImageField(upload_to="images/", default="../profile_c2bceg")
    user_type = models.CharField(max_length=255, blank=True)

    USER_TYPE_CHOICES = [
        ("regular user", "regular user"),
        ("chef", "chef"),
    ]
    user_type = models.CharField(
        max_length=10, choices=USER_TYPE_CHOICES, default="regular user"
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
