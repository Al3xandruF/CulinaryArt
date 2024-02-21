from django.contrib import admin
from .models import RecipeComment, RecipeCommentReply

admin.site.register(RecipeComment)
admin.site.register(RecipeCommentReply)
