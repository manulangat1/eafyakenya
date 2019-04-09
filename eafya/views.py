from django.shortcuts import render
from .models import Patient,Doctor,Hospital,History,Home
from .serializers import HomeSerializer,UserSerializer,PatientCreateSerializer,PatientDetailsSerializer,HistorySerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import viewsets
from django.contrib.auth import login,logout,authenticate
from rest_framework import status
from rest_framework.response import Response
# from drf_haystack.viewsets import HaystackViewSet
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
# class PatientSearch(HaystackViewSet):
#     index_models = [Patient]
#     serializer_class = PatientSearchSerializer
class HomeView(viewsets.ModelViewSet):
    serializer_class = HomeSerializer
    queryset = Home.objects.order_by('-pub_date')
from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_RANGE,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    SearchFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet

from eafya import documents as articles_documents
from eafya import serializers as articles_serializers
class PatientViewSet(DocumentViewSet):
    document = articles_documents.PatientDocument
    serializer_class = articles_serializers.PatientDocumentSerializer
    lookup_field = 'hospital_number'
