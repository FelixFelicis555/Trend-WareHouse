from django.contrib import admin

# Register your models here.

from .models import User,Product,Order_Details,Order_Items,Payment_Details

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Order_Details)
admin.site.register(Order_Items)
admin.site.register(Payment_Details)




