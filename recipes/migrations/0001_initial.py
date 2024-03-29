# Generated by Django 3.2.23 on 2024-02-13 15:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('recipe_title', models.CharField(max_length=255)),
                ('recipe_description', models.TextField(blank=True)),
                ('ingredients', models.TextField(blank=True)),
                ('cooking_time', models.DurationField()),
                ('difficulty', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], default=1, max_length=50)),
                ('servings', models.IntegerField()),
                ('calories', models.IntegerField()),
                ('image', models.ImageField(choices=[], default='normal', max_length=32, upload_to=None)),
                ('recipe_preparation', models.TextField(blank=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
