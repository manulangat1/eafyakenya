from elasticsearch_dsl import analyzer

from django_elasticsearch_dsl import DocType, Index, fields
from .models import Patient
from eafya import models as articles_models

article_index = Index('articles')
article_index.settings(
    number_of_shards=1,
    number_of_replicas=0
)

html_strip = analyzer(
    'html_strip',
    tokenizer="standard",
    filter=["standard", "lowercase", "stop", "snowball"],
    char_filter=["html_strip"]
)
@article_index.doc_type
class PatientDocument(DocType):
    class Meta:
        model = Patient
        fields = [
        'age',
        'hospital_number',
        'name'
        ]
