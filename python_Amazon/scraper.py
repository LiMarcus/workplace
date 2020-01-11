import requests
from bs4 import BeautifulSoup
import smtplib
import time

URL = 'https://www.amazon.ca/Compression-Arthritis-Meniscus-Recovery-Approved/dp/B073R7TK7N/ref=br_msw_pdt-5?_encoding=UTF8&smid=AVOLKJ9FX40AA&pf_rd_m=A3DWYIK6Y9EEQB&pf_rd_s=&pf_rd_r=CV3EG6XZ3K07GYNYVQB2&pf_rd_t=36701&pf_rd_p=8b68a462-b908-4cf4-b9b4-0c036da526cd&pf_rd_i=desktop&th=1&psc=1'

headers = {"User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'}



def check_price():
    page = requests.get(URL, headers = headers)
    soup1 = BeautifulSoup(page.content, 'html.parser')
    soup2 = BeautifulSoup(soup1.prettify(), "html.parser")

    #title = soup2.find(id="productTitle").get_text()
    price = soup2.find(id="priceblock_ourprice").get_text()
    #strip_price = price.strip()
    converted_price = float(price[5:-3])

    if(converted_price < 2000):
        send_mail()

    print(converted_price)

def send_mail(): 
    server = smtplib.SMTP('smtp.gmail.com',587)
    # server = smtplib.SMTP('localhost')
    #server.connect("smtp.example.com",587)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login('freestylehandicraft@gmail.com', 'qq514203256')
    subject = 'Price fell down'
    body= 'check link'

    msg = """From: From Person <from@fromdomain.com>
    To: To Person <to@todomain.com>
    Subject: SMTP e-mail test

    This is a test e-mail message.
    """

    try:
        server.sendmail(
            'freestylehandicraft@gmail.com',
            'wxzcon@gmail.com',
            msg
        )
        print("email sent")
    except:
        print("faild")
    server.quit()

check_price()

while(True):
    check_price()
    time.sleep(60)