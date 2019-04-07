from .models import Patient,Doctor,Hospital,History
from rest_framework import serializers
# from .random import hosp_random
from .search_indexes import PatientIndex
import random
from .tasks import send_welcome_email_task,send_hospital_number_task
from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate
from drf_haystack.serializers import HaystackSerializer
#crreate your serializers here.
class PatientCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('name','age','pic','email',)
    def create(self,validated_data):
        name = validated_data['name']
        email = validated_data['email']
        pic = validated_data['pic']
        age = validated_data['age']
        Numbers  = range(12642,18394)
        RandomNumber = random.choice(Numbers)
        hospital_number = RandomNumber
        patient = Patient.objects.create(name=name,email=email,pic=pic,age=age,hospital_number=hospital_number)
        send_hospital_number_task.delay(email,hospital_number,name)
        return patient
class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'
class PatientDetailsSerializer(serializers.ModelSerializer):
    history = HistorySerializer(many=True)
    class Meta:
        model = Patient
        fields = ('name','age','pic','email','history',)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','password',)
        extra_kwargs = {"password":{'write_only':True}}
    def create(self,validated_data):
        username = validated_data['username']
        email = validated_data['email']
        user = User(username=username,email=email)
        user.set_password(validated_data['password'])
        user.save()
        send_welcome_email_task.delay(username,email)
        return user
class PatientSearchSerializer(HaystackSerializer):
    class Meta:
        index_classes = [PatientIndex]
        fields = [
          "name","hospital_number"
        ]
