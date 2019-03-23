from django.shortcuts import render
from .models import Movie
from django.core import serializers
from django.http import JsonResponse
import json

# Create your views here.

def movie_list(request):
    # phrase = request['search']
    phrase = request.GET['q']
    queryset=Movie.objects.filter(name__istartswith = phrase)[:10]
    if phrase == '':
        queryset=Movie.objects.none()
    print(queryset)
    serialized_data = serializers.serialize('json', queryset)
    return JsonResponse(serialized_data, safe=False)


