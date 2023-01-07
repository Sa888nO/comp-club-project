from app import db, session, Base 

class CleaningRequest(Base):
    __tablename__ = 'CleaningRequests'
    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), nullable=False)

class MarketingOffer(Base):
    __tablename__ = 'MarketingOffers'
    id = db.Column(db.Integer, primary_key=True)
    information = db.Column(db.String(500), nullable=False)
    status = db.Column(db.String(50), nullable=False)

class StorageItem(Base):
    __tablename__ = 'StorageItems'
    id = db.Column(db.Integer, primary_key=True)
    itemName = db.Column(db.String(50), nullable=False)
    count = db.Column(db.Integer, nullable=False)

class IncomeItem(Base):
    __tablename__ = 'IncomeItems'
    id = db.Column(db.Integer, primary_key=True)
    incomeType = db.Column(db.String(50), nullable=False)
    money = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(50), nullable=False)

class RateItem(Base):
    __tablename__ = 'RateItems'
    id = db.Column(db.Integer, primary_key=True)
    rateType = db.Column(db.String(50), nullable=False)
    money = db.Column(db.Integer, nullable=False)
    date = db.Column(db.String(50), nullable=False)

class ProviderOffer(Base):
    __tablename__ = 'ProviderOffers'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(50), nullable=False)

class BuyRequest(Base):
    __tablename__ = 'BuyRequests'
    id = db.Column(db.Integer, primary_key=True)
    department = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), nullable=False)

class Employee(Base):
    __tablename__ = "Employees"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    userType = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    salary = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(50), nullable=False)

class Computer(Base):
    __tablename__ = 'Computers'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(50), nullable=False)
    information = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    RentTime = db.Column(db.String(50), nullable=False)

class User(Base):
    __tablename__ = "Users"
    id = db.Column(db.Integer, db.ForeignKey(Employee.id), primary_key=True, nullable=False)
    login = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)

class ServiceRequest(Base):
    __tablename__ = 'ServiceRequests'
    id = db.Column(db.Integer, primary_key=True)
    computer_id = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(500), nullable=False)
    status = db.Column(db.String(50), nullable=False)
