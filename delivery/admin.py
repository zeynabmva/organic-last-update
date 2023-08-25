

# Register your models here.
from django.contrib import admin
from .models import DeliveryInformation

class DeliveryInformationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'address', 'city', 'zip_code', 'phone')  # Görüntülənəcək sütunlar
    list_filter = ('city', 'zip_code')  # Sütunlara görə filterləmək üçün seçimlər
    search_fields = ('full_name', 'email')  # Axtarış üçün sahələr

admin.site.register(DeliveryInformation, DeliveryInformationAdmin)


# from .models import CardInformation

# class CardInformationAdmin(admin.ModelAdmin):
#     list_display = ( 'card_number', 'exp_date', 'security_code')  # Görüntülənəcək sütunlar
    

# admin.site.register(CardInformation, CardInformationAdmin)