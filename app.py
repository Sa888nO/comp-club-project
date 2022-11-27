from email import message
from flask import Flask, jsonify, request
import sqlalchemy as db
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base


app = Flask(__name__)
CORS(app)

engine = create_engine('sqlite:///db.sqlite')

session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Base = declarative_base()
Base.query = session.query_property()

from models import * 

Base.metadata.create_all(bind=engine)

# [GET]
# api /api/AllSubscribes
# api api/users
# api /api/lessons

# api /api/registration
# api /api/authorization
# api /api/subscribesById
# api /api/subscribe

# api /api/DeleteSubscribe



# api /api/registration
@app.route('/api/registration', methods=['POST'])
def add_new_user():
    new_user = User(**request.json)
    if(new_user.name == "" or new_user.surname == "" or new_user.password == ""):
        return {'massage': 'Данные пришли неверно'}, 400
    # проверку лучше сделать в дальнейшем на фронте
    session.add(new_user)
    session.commit()
    serialized = {
        'id': new_user.id,
        'name': new_user.name,
        'surname': new_user.surname,
        'password': new_user.password  
    }
    return jsonify(serialized)

# api /api/authorization
@app.route('/api/authorization', methods=['POST'])
def authorization():
    user = User(**request.json)
    item = User.query.filter(
        User.surname.like(user.surname),
        User.password.like(user.password),
        ).first()
    if (not item or user.surname == "" or user.password == ""):
        return {'massage': 'Неверный логин или пароль'}, 400
    # проверку лучше сделать в дальнейшем на фронте
    serialized = {
        'id': item.id,
        'name': item.name,
        'surname': item.surname,
        'password': item.password  
    }
    return jsonify(serialized)

# api api/users
@app.route('/api/users', methods=['GET'])
def get_users_list():
    users = User.query.all()
    serialized = []
    for user in users: 
        serialized.append({
            'id': user.id,
            'name': user.name,
            'surname': user.surname,
            'password': user.password
        })
    return jsonify(serialized)

# api /api/lessons
@app.route('/api/lessons', methods=['GET'])
def get_lessons_list():
    lessons = Lesson.query.all()
    serialized = []
    for lesson in lessons: 
        serialized.append({
            'id': lesson.id,
            'title': lesson.title,
            'date': lesson.date,
            'coach': lesson.coach
        })
    return jsonify(serialized)

# api /api/subscribesById
@app.route('/api/subscribesById/<int:user_id>', methods=['POST'])
def get_subs_by_user_id(user_id):
    subs = Subscribe.query.filter(Subscribe.user_id.like(user_id)) 
    serialized = []
    for sub in subs: 
        serialized.append({
            'user_id': sub.user_id,
            'lesson_id': sub.lesson_id,
        })
    if serialized == []:
        return {'massage': 'записей нет'}, 400
    return jsonify(serialized)

# api /api/subscribe
#дает создавать фейк сс, но можно пофиксить ограничением на кнопке
@app.route('/api/subscribe', methods=['POST'])
def add_new_subscribe():
    new_subscribe = Subscribe(**request.json)
    session.add(new_subscribe)
    session.commit()
    serialized = {
        'user_id': new_subscribe.user_id,
        'lesson_id': new_subscribe.lesson_id
    }
    return jsonify(serialized)

# api /api/DeleteSubscribe
@app.route('/api/DeleteSubscribe', methods=['DELETE'])
def delete_subscribe():
    delete_subscribe = Subscribe(**request.json)
    subscribe = Subscribe.query.filter(
    Subscribe.user_id.like(delete_subscribe.user_id),
    Subscribe.lesson_id.like(delete_subscribe.lesson_id),
    ).first()
    if not subscribe:
        return {'message': "такой записи нет"}, 400
    session.delete(subscribe)
    session.commit()
    return "", 204

# api /api/AllSubscribes
@app.route('/api/AllSubscribes', methods=['GET'])
def get_subscribes_list():
    subscribes = Subscribe.query.all()
    serialized = []
    for subscribe in subscribes: 
        serialized.append({
            'user_id': subscribe.user_id,
            'lesson_id': subscribe.lesson_id
        })
    return jsonify(serialized)

# session close
@app.teardown_appcontext
def shutdown_session(exception=None):
    session.remove()


if __name__ == '__main__':
    app.run(debug=True)