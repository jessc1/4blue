ChatBot API

frameworks:  django and django rest framework

## Endpoints:  http://127.0.0.1:8000/swagger/
* To get access to the api and send a message http://127.0.0.1:8000/api/chat/   
* To get the history of messages  http://127.0.0.1:8000/api/history/



commands:

 start the django server
```
 uv run --env-file .env python manage.py runserver
```

 to create database migration
```
 uv run --env-file .env python manage.py  makemigrations
```

applying  the migration
```
uv run --env-file .env python manage.py migrate
```
