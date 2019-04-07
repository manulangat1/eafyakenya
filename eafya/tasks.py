from celery.decorators import task
from celery.utils.log import get_task_logger
from .emails import send_welcome_email,send_hospital_number
logger = get_task_logger(__name__)
@task(name="send_welcome_email_task")
def send_welcome_email_task(email,username):
    logger.info("sent welcome email")
    return send_welcome_email(email,username)
@task(name="send_hospital_number_task")
def send_hospital_number_task(email,hospital_number,name):
    logger.info("sent hospital number to the recipient")
    return send_hospital_number(email,name,hospital_number)
