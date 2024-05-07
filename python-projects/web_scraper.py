import requests
from bs4 import BeautifulSoup

url_amazon = 'https://www.amazon.in/Apple-MacBook-Laptop-12%E2%80%91core-19%E2%80%91core/dp/B0BSHYJW7F/ref=sr_1_4?keywords=m2+macbook+pro&qid=1676949175&sprefix=m2+macbook+%2Caps%2C354&sr=8-4'

headers = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0'
}

page = requests.get(url_amazon, headers=headers)

soup = BeautifulSoup(page.content, 'html.parser')

title = soup.find(id="productTitle").get_text().strip()

def convert_price(price_str):
    converted_price = ''
    for price in price_str:
        converted_price += price
    return float(converted_price)

price = convert_price(soup.find(attrs={
    "class": "a-price-whole"
}).get_text().strip().split(','))

print(title)
print(price)

def send_msg():
    url = "https://www.fast2sms.com/dev/bulkV2"
    querystring = {"authorization":"API_KEY","message":f'Price has dropped, checkout {url_amazon}',"language":"english","route":"q","numbers":"9872479431"}
    headers = {
        'cache-control': "no-cache"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    print(response.text)

if (price > 200000):
    send_msg()
