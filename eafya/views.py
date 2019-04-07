from django.shortcuts import render
from .models import Patient,Doctor,Hospital,History
from .serializers import PatientSearchSerializer,UserSerializer,PatientCreateSerializer,PatientDetailsSerializer,HistorySerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import viewsets
from django.contrib.auth import login,logout,authenticate
from rest_framework import status
from rest_framework.response import Response
from drf_haystack.viewsets import HaystackViewSet
from rest_framework.parsers import JSONParser,FormParser,MultiPartParser,FileUploadParser
# Create your views here.
def index(request):
    return render(request, 'index.html')
class PatientViewSerializer(generics.CreateAPIView):
    parser_classes = (MultiPartParser,JSONParser,)
    serializer_class = PatientCreateSerializer
class PatientDetailsView(viewsets.ModelViewSet):
    serializer_class = PatientDetailsSerializer
    queryset =  Patient.objects.all()
class HistoryView(viewsets.ModelViewSet):
    serializer_class = HistorySerializer
    queryset = History.objects.all()
class Register(generics.CreateAPIView):
    serializer_class = UserSerializer
class LoginView(APIView):
    def post(self,request,format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username,password=password)
        if user:
            return Response(login(request,user))
        else:
            return Response({"wrong credential providers"},status = status.HTTP_404_NOT_FOUND)
class PatientSearch(HaystackViewSet):
    index_models = [Patient]
    serializer_class = PatientSearchSerializer
