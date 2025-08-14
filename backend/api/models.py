from django.db import models

# Create your models here.
class Workers(models.Model):
    ROLE_CHOICES = [
        ("HR", "HR"),
        ("Employee", "Employee")
    ]
    STATUS_CHOICES = [
        ('ACTIVE', 'Active'),
        ('ON_LEAVE', 'On Leave'),
        ('RESIGNED', 'Resigned')
    ]
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    department = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    date_joined = models.DateField(auto_now_add=True)
    employment_status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='ACTIVE')
    password = models.CharField(max_length=255)  # store hashed password
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)

    def __str__(self):
        return f"{self.full_name} - {self.role}"
