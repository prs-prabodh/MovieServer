from django.shortcuts import render
from .models import Movie, User
from django.core import serializers
from django.http import JsonResponse
import json

# Create your views here.

def movie_list(request, phrase):
    # phrase = request['search']
    queryset=Movie.objects.filter(name__istartswith = phrase)[:10]
    if phrase == '':
        queryset=Movie.objects.none()
    print(queryset)
    serialized_data = serializers.serialize('json', queryset)
    return JsonResponse(serialized_data, safe=False)

def create_user(request,name,username,password):
    if(User.objects.filter(username=username).exists()):
        return JsonResponse({'status': 'error', 'message': 'Username already exists!'})
    User(name=name, username=username, password=password).save()
    return JsonResponse({'status': 'success', 'message': 'User registered successfully!'})

def authorise(request, username, password):
    print('pinged!')
    if(User.objects.filter(username=username).exists()):
        if(User.objects.get(username=username).password==password):
            return JsonResponse({'status': 'success', 'name': User.objects.get(username=username).name, 'message': 'User authenticated!'})
        else:
            return JsonResponse({'status': 'error', 'name': '' , 'message': 'Incorrect password'})
    else:
        return JsonResponse({'status': 'error', 'name': '', 'message': 'Username does not exist'})


