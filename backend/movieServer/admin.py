from django.contrib import admin
from .models import Movie, User

# Register your models here.

admin.site.register(Movie)
admin.site.register(User)