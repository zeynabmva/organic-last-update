

# Create your models here.
from django.db import models

class DeliveryInformation(models.Model):
    full_name = models.CharField(max_length=256)
    email = models.EmailField()
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=256)
    zip_code = models.CharField(max_length=10)
    phone = models.CharField(max_length=20)
    message = models.TextField(max_length=5000)

    def __str__(self):
        return self.full_name
    

# class CardInformation(models.Model):
    
#     card_number = models.IntegerField()
#     exp_date = models.CharField(max_length=20)
#     security_code = models.IntegerField()

#     def __str__(self):
#         return self.email

    