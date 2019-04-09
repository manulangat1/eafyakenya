from django.conf.urls import url,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from . import views
from .views import LoginView,Register,PatientViewSerializer,HistoryView,PatientDetailsView,HomeView,PatientViewSet
#create your urlpatterns hereself.
router = DefaultRouter()
router.register('patients',PatientDetailsView,base_name="patients")
router.register('history',HistoryView,base_name='history')
router.register("patient/search",PatientViewSet,base_name="search")
router.register("home",HomeView,base_name='homes')
urlpatterns = [
    url(r'^$',views.index,name="index"),
    url(r'^createpatient/$',views.PatientViewSerializer.as_view(),name="create"),
    # url(r'^home/',views.HomeView.as_view(),name="home"),
    url(r'^register/$',views.Register.as_view(),name="register"),
    url(r'^login/$',views.LoginView.as_view(),name="login"),
    url(r'',include(router.urls)),
    # url(r'^search/', include('haystack.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
