"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/

Examples
--------
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

"""

from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.urls.resolvers import URLPattern, URLResolver

from apps.base.views import Index

urlpatterns: list[URLPattern | URLResolver] = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.jwt")),
]

if settings.DEBUG:
    urlpatterns += [
        path("__debug__/", include("debug_toolbar.urls")),
        path("admin/doc/", include("django.contrib.admindocs.urls")),
    ]

urlpatterns += [
    # If you want to use Django Server Side Rendering then use this path.
    # path("", Index.as_view(), name="index"),
    #
    # If you want to use React Router Single Page Application then use this path.
    # Please note that this path must be at the end of the `urlpatterns`.
    re_path(r"^.*$", Index.as_view(), name="index"),
]
