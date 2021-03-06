# Generated by Django 2.1.8 on 2019-04-02 09:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration', models.PositiveIntegerField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('registration', models.PositiveIntegerField()),
                ('location', models.CharField(max_length=100)),
                ('doctors', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eafya.Doctor')),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=129)),
                ('age', models.PositiveIntegerField()),
                ('hospital_number', models.PositiveIntegerField()),
                ('pic', models.ImageField(upload_to='pictures/')),
            ],
        ),
        migrations.AddField(
            model_name='history',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eafya.Patient'),
        ),
    ]
