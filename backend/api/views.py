# from django.shortcuts import render

# # Create your views here.
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status   
# from .models import Workers
# from .serializers import WorkerSerializer

# class manageWorkers(APIView):
#     def post(self , request):
#         serializer = WorkerSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import WorkerSerializer
from .models import Workers as Worker
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.contrib.auth import logout

@api_view(['POST'])
def registerWorker(request):
    serializer = WorkerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Worker registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# @api_view(['POST'])
# def login(request):
#     username = request.data.get('username') or request.data.get('email')
#     password = request.data.get('password')
#     if not username or not password:
#         return Response({"error": "Username (or email) and password are required"}, status=status.HTTP_400_BAD_REQUEST)
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         return Response({
#                     "message": "Login successful",
#                     "worker_id": user.id,
#                     "role": getattr(user, 'role', None)
#                 }, status=status.HTTP_200_OK)
#     else:
#         return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"error": "Please provide both email and password"}, status=status.HTTP_400_BAD_REQUEST)

    worker = Worker.objects.filter(email=email).first()
    if worker is None:
        return Response({"error": "Worker not found"}, status=status.HTTP_404_NOT_FOUND)

    # Assuming passwords are hashed using Django's make_password
    # Use check_password to verify
    if not check_password(password, worker.password):
        return Response({"error": "Invalid password"}, status=status.HTTP_401_UNAUTHORIZED)

    return Response({
        "message": "Login successful",
        "worker_id": worker.id,
        "role": getattr(worker, 'role', None)
    }, status=status.HTTP_200_OK)
    
@api_view(['POST'])
def logout_view(request):
    logout(request)  # removes session data
    return Response({"message": "Logged out successfully"})
