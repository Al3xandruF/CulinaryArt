# Generated by Django 3.2.23 on 2024-02-13 13:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comments', '0001_initial'),
        ('recipes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeSaved',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='saved', to='recipes.recipe')),
            ],
            options={
                'ordering': ['-created_at'],
                'unique_together': {('owner', 'recipe')},
            },
        ),
        migrations.CreateModel(
            name='RecipeLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='recipes.recipe')),
            ],
            options={
                'ordering': ['-created_at'],
                'unique_together': {('owner', 'recipe')},
            },
        ),
        migrations.CreateModel(
            name='RecipeCommentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('recipe_comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='comments.recipecomment')),
            ],
            options={
                'ordering': ['-created_at'],
                'unique_together': {('owner', 'recipe_comment')},
            },
        ),
    ]
