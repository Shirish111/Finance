# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from myapp.models import user1

# Create your views here.

# This method is only for testing purposes


def startPage(request):
    return render(request, './build/index.html')


def isLoggedIn(request):
    if request.session.get("user_id", False):
        print "LoggedIn"
        res = JsonResponse({"success": True})
        res['Access-Control-Allow-Origin'] = "http://localhost:3000"
        res['Access-Control-Allow-Credentials'] = True
        return res
    else:
        print "Not LoggedIn"
        res = JsonResponse({"success": False})
        res['Access-Control-Allow-Origin'] = "http://localhost:3000"
        res['Access-Control-Allow-Credentials'] = 'true'
        return res


def login(request):
    if request.session.get("user_id", False):
        print "Already LoggedIn"
        res = JsonResponse({"success": True})
        res['Access-Control-Allow-Origin'] = "http://localhost:3000"
        res['Access-Control-Allow-Credentials'] = 'true'
        return res
    username1 = request.POST.get("username")
    password1 = request.POST.get("password")
    print "Received", username1, password1
    try:
        b = user1.objects.get(username=username1, password=password1)
    except:
        b = None
    if b is None:
        print "Not Found"
        res = JsonResponse({
            "success": True,
            "id": b.id,
            "username": b.username
        })
        res['Access-Control-Allow-Origin'] = "http://localhost:3000"
        res['Access-Control-Allow-Credentials'] = 'true'
        return res
    else:
        print "Successfully logged in!"
        request.session["user_id"] = b.id
        res = JsonResponse({"success": True})
        res['Access-Control-Allow-Origin'] = "http://localhost:3000"
        res['Access-Control-Allow-Credentials'] = 'true'
        return res


def newUser(request):
    return render(request, "newuser.html")


def newUserSave(request):
    username1 = request.POST.get("username")
    password1 = request.POST.get("password")
    b = user1(username=username1, password=password1)
    b.save()
    return HttpResponse("Successfully Saved")


def list1(request):
    l1 = []
    for i in user1.objects.all():
        l1.append([i.username, i.password])
    return HttpResponse(str(l1))


def tmp(request):
    res = JsonResponse({"success": False})
    res['Access-Control-Allow-Origin'] = "http://localhost:3000"
    res['Access-Control-Allow-Credentials'] = 'true'
    return res
