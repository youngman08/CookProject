# AshpazBashi website
Ashpazbashi website created by django framework and Reactjs.

This project is made for the final project of the Web Design course taught by Dr.Yumcoder.

## Team members:
- Reza Soumi 98105857
- Ali Javanmard 97105877
- Hamdreza Kalbasi 98109156

# How to run backend:

- clone repo
- cd CookProjectBackend
- Create cookommunity (in mysql)
- python3 manage.py makemigrations cook
- python3 manage.py makemigrations cookommuinty
- python3 manage.py migrate
- cd sql_data
- mysql -u root -p cookommunity < data.sql
- python manage.py runserver

# How to run front:

- cd CookProjectFrontend
- npm install -f
- npm start
