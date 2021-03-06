# Generated by Django 2.1.8 on 2019-04-07 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eafya', '0002_patient_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=46)),
                ('text', models.TextField()),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='doctor',
            name='registration',
            field=models.PositiveIntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='patient',
            name='email',
            field=models.EmailField(default=1, max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='patient',
            name='hospital_number',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]
