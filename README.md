ChatBot API

frameworks:  django, django rest framework, and react
- utilizei o gerenciador de pacotes uv pois é leve, rápido e fácil.
- para o design do chat, utilizei a entidade usuário para pegar o histórico de mensagens e tentei usar menos componentes no react.

* To get access to the api and send a message http://127.0.0.1:8000/api/chat/   
* To get the history of messages  http://127.0.0.1:8000/api/history/
* Front End chat  http://localhost:3000/chat/
* Front End History http://localhost:3000/history/


commands:

 start the django server
```
 uv run --env-file .env python manage.py runserver
```
 start the react
```
 npm start
```

 to create database migration
```
 uv run --env-file .env python manage.py  makemigrations
```

applying  the migration
```
uv run --env-file .env python manage.py migrate
```
