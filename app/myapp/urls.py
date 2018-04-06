from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'isLoggedIn', views.isLoggedIn, name='isLoggedIn'),
    url(r'^newUser$', views.newUser, name='newUser'),
    url(r'^newUserSave$', views.newUserSave, name='newUserSave'),
    url(r'^login$', views.login, name='login'),
    url(r'^list1$', views.list1, name='list1'),
]
