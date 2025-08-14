from django.urls import path
from .views import registerWorker , login , logout_view 

urlpatterns = [
    path('register/', registerWorker, name='registerWorker'),
    path('login/', login, name='login'),
    path('logout/', logout_view, name='logout'),
]