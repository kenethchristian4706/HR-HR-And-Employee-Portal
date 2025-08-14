from rest_framework import serializers
from .models import Workers
from django.contrib.auth.hashers import make_password

class WorkerSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    class Meta:
        model = Workers
        fields = [
            'id', 'full_name', 'email', 'phone_number',  
            'role', 'department', 'position', 'employment_status', 
            'password','password1', 'profile_picture'
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def validate(self, data):
        print(data)
        if data['password'] != data['password1']:
            raise serializers.ValidationError("Passwords do not match")
        return data
    def create(self, validated_data):
        validated_data.pop('password1', None)  # Remove password1 from validated data

        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
        