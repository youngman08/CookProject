import sys
from typing import IO

from json import load as jr
from json import dumps as jw
import requests

BASE_API = "http://127.0.0.1:8000/api/"


def make_ingredients_request(data_file: IO):
    api = BASE_API + "foodstuffs/"
    data_list = jr(data_file)
    for data in data_list:
        print(data['name'])
        requests.post(api, data=data)


def make_recipes_request(data_file: IO):
    api = BASE_API + "recipes/"
    data_list = jr(data_file)
    for data in data_list:
        print(data['name'])
        requests.post(api, data=jw(data))


if __name__ == "__main__":
    data_file = open(sys.argv[2], 'r')
    entity = sys.argv[1]
    if entity == 'recipes':
        make_recipes_request(data_file)
    if entity == 'ingredients':
        make_ingredients_request(data_file)
