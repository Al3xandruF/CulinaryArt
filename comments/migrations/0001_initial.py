# Generated by Django 3.2.23 on 2024-02-13 15:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('recipes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('recipe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='recipes.recipe')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='RecipeCommentReply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
                ('main_comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='replies_to_reply', to='comments.recipecomment')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('recipe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='recipes.recipe')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
