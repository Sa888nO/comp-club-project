from app import db, session, Base 

class User(Base):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Lesson(Base):
    __tablename__ = "lessons"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    coach = db.Column(db.String(500), nullable=False)

class Subscribe(Base):
    __tablename__ = "subscribes"
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), primary_key=True, nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey(Lesson.id), primary_key=True, nullable=False)

    