# Generated by Django 3.2.23 on 2024-02-13 15:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChefBio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chef_title', models.CharField(blank=True, max_length=255)),
                ('place_of_birth', models.CharField(blank=True, max_length=255)),
                ('cooking_school', models.CharField(blank=True, max_length=255)),
                ('speciality_dish', models.CharField(blank=True, max_length=255)),
                ('achievements', models.TextField(blank=True)),
                ('web_address', models.EmailField(blank=True, max_length=254)),
                ('owner', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profiles.profile')),
            ],
        ),
    ]
