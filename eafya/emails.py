from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
def send_welcome_email(username,receiver):
    subject = 'Welcome to the eafya application'
    sender = 'emmanuelthedeveloper@gmail.com'
    #passing in the context variables
    text_content = render_to_string('email/wel.txt',{"username":username})
    html_content = render_to_string('email/wel.html',{"username":username})
    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()
def send_hospital_number(name,hospital_number,receiver):
    subject = 'your hospital_number'
    sender = 'emmanuelthedeveloper@gmail.com'
    #passing in the context variable
    text_content = render_to_string('email/hos.txt',{"name":name,"hospital_number":hospital_number})
    html_content = render_to_string('email/hos.html',{"name":name,"hospital_number":hospital_number})
    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()
