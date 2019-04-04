from haystack import indexes
from .models import Patient
class PatientIndex(indexes.SearchIndex,indexes.Indexable):
    text =  indexes.CharField(document=True,use_template=True)
    name = indexes.CharField(model_attr='name')
    age  = indexes.CharField(model_attr='age')
    hospital_number = indexes.CharField(model_attr='hospital_number')
    # pic = indexes.ImageField(model_attr='pic')
    def get_model(self):
        return Patient
    def index_queryset(self,using=None):
        return self.get_model().objects.all()
