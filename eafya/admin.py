from django.contrib import admin
from .models import Patient,Doctor,Hospital,History,Home

# Register your models here.
admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Hospital)
admin.site.register(History)
admin.site.register(Home)
