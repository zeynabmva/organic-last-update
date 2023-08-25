from rest_framework import serializers
from .models import DeliveryInformation 

class DeliveryInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryInformation
        fields = '__all__'





# class CardInformationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CardInformation
#         fields = '__all__'