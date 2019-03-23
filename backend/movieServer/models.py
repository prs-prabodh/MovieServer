from django.db import models

# Create your models here.

class Movie(models.Model):
    name=models.CharField(max_length=200)
    director_name=models.CharField(max_length=50)
    duration=models.CharField(max_length=50)
    actor_1_name=models.CharField(max_length=50)
    actor_2_name=models.CharField(max_length=50)
    actor_3_name=models.CharField(max_length=50)
    genre=models.CharField(max_length=50)
    imdb_score=models.CharField(max_length=5)
    year=models.CharField(max_length=5)
    language=models.CharField(max_length=50)

    def __str__(self):
        return self.name