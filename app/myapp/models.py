# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class user1(models.Model):
    username = models.CharField(
        max_length=30, null=False, unique=True, default="")
    password = models.CharField(max_length=128, default="")
