from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Doctor(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    registration = models.PositiveIntegerField()
    def __str__(self):
        return self.name
    def save_doc(self):
        self.save()
class  Hospital(models.Model):
    name = models.CharField(max_length=100,unique=True)
    registration = models.PositiveIntegerField()
    location = models.CharField(max_length=100)
    doctors = models.ForeignKey(Doctor,on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    def save_hos(self):
        self.save()
class Patient(models.Model):
    name = models.CharField(max_length=129)
    age =  models.PositiveIntegerField()
    hospital_number = models.PositiveIntegerField()
    pic = models.ImageField(upload_to='pictures/')

    def __str__(self):
        return self.name
    def save_pat(self):
        self.save()
    @property
    def history(self):
        return self.history_set.all()
class History(models.Model):
    text = models.TextField()
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
