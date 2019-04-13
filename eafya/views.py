from django.shortcuts import render
from .models import Patient,Doctor,Hospital,History,Home
from .serializers import PatientDocumentSerializer,HomeSerializer,UserSerializer,PatientCreateSerializer,PatientDetailsSerializer,HistorySerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import viewsets
from django.contrib.auth import login,logout,authenticate
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
# from drf_haystack.viewsets import HaystackViewSet
from rest_framework.parsers import JSONParser,FormParser,MultiPartParser,FileUploadParser
from .documents import PatientDocument
from django.http import Http404
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
class HomeView(viewsets.ModelViewSet):
    serializer_class = HomeSerializer
    queryset = Home.objects.order_by('-pub_date')
def search(request):
    q = request.GET.get('q')
    if q:
        posts = PatientDocument.search().query("match",hospital_number=q)
    else:
        posts = 'none found'
    return render(request,'search.html',{'posts':posts})
class SearchView(APIView):
    def get(self,request):
        q = request.query_params.get('q')
        if q:
            posts = PatientDocument.search().query("match",hospital_number=q)
            serializer = PatientDocumentSerializer(posts)
            return Response(serializer.data)
        else:
            posts = "none found"
            return Response(posts)
from rest_framework.decorators import api_view

@api_view(['GET'])
def searchs(request):
    q = request.GET.get('q')
    if q:
        posts = PatientDocument.search().query("match",hospital_number=q).to_dict()
        # serializer = PatientDocumentSerializer(posts,many=True)
        return Response(posts)
    else:
        posts = "none found"
        return Response(posts)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter,SearchFilter
from rest_framework import filters
class PatientSearch(viewsets.ModelViewSet):
    serializer_class = PatientDetailsSerializer
    queryset = Patient.objects.all()
    # fiter_backends = (DjangoFilterBackend,SearchFilter,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('=name','=hospital_number',)
