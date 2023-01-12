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

# Cleaning
@app.route('/api/cleaning', methods=['GET'])
def get_cleaning_list():
    CleaningRequests = CleaningRequest.query.all()
    serialized = []
    for CleaningRequestItem in CleaningRequests: 
        serialized.append({
            'id': CleaningRequestItem.id,
            'location': CleaningRequestItem.location,
            'status': CleaningRequestItem.status,
        })
    return jsonify(serialized)

@app.route('/api/cleaning', methods=['POST'])
def add_new_cleaning():
    new_cleaning = CleaningRequest(**request.json)
    session.add(new_cleaning)
    session.commit()
    return {'message': 'Заявка на уборку создана'}, 

@app.route('/api/updatecleaning', methods=['POST'])
def update_cleaning():
    new_cleaning = CleaningRequest(**request.json)
    old_cleaning = CleaningRequest.query.filter(
    CleaningRequest.id.like(new_cleaning.id)
    ).first()
    if not old_cleaning:
    	return {message: 'Такой записи нет'}, 500
    session.delete(old_cleaning)
    session.add(new_cleaning)
    session.commit()
    return {'message': 'Заявка на уборку закрыта'}, 200


# Marketing
@app.route('/api/marketing', methods=['GET'])
def get_marketing_list():
    MarketingOffers = MarketingOffer.query.all()
    serialized = []
    for MarketingOfferItem in MarketingOffers: 
        serialized.append({
            'id': MarketingOfferItem.id,
            'information': MarketingOfferItem.information,
            'status': MarketingOfferItem.status,
        })
    return jsonify(serialized)

@app.route('/api/marketing', methods=['POST'])
def add_new_marketing():
    new_marketing = MarketingOffer(**request.json)
    session.add(new_marketing)
    session.commit()
    return {'message': 'Заявка на продажу создана'}, 200

# Storage
@app.route('/api/storage', methods=['GET'])
def get_storage_list():
    StorageItems =  StorageItem.query.all()
    serialized = []
    for StorageItemItem in StorageItems: 
        serialized.append({
            'id': StorageItemItem.id,
            'itemName': StorageItemItem.itemName,
            'count': StorageItemItem.count,
        })
    return jsonify(serialized)

@app.route('/api/storage', methods=['POST'])
def add_new_storage():
    new_storage = StorageItem(**request.json)
    session.add(new_storage)
    session.commit()
    return {'message': 'Предмет в хранилище добавлен'}, 200

# Income
@app.route('/api/income', methods=['GET'])
def get_income_list():
    IncomeItems =  IncomeItem.query.all()
    serialized = []
    for IncomeItemItem in IncomeItems: 
        serialized.append({
            'id': IncomeItemItem.id,
            'incomeType': IncomeItemItem.incomeType,
            'money': IncomeItemItem.money,
            'date': IncomeItemItem.date,
        })
    return jsonify(serialized)

@app.route('/api/income', methods=['POST'])
def add_new_income():
    new_income = IncomeItem(**request.json)
    session.add(new_income)
    session.commit()
    return {'message': 'Новый доход поступил'}, 200

#RateItem
@app.route('/api/rateitem', methods=['GET'])
def get_rateitem_list():
    RateItems = RateItem.query.all()
    serialized = []
    for RateItemItem in RateItems: 
        serialized.append({
            'id': RateItemItem.id,
            'rateType': RateItemItem.rateType,
            'money': RateItemItem.money,
            'date': RateItemItem.date,
        })
    return jsonify(serialized)

@app.route('/api/rateitem', methods=['POST'])
def all_new_rateitem():
    new_RateItem = RateItem(**request.json)
    session.add(new_RateItem)
    session.commit()
    return {'message': 'Новый расход поступил'}

#ProviderOffer (Предложение от поставщика)
@app.route('/api/provideroffer', methods=['GET'])
def get_provideroffer_list():
    ProviderOfferItems = ProviderOffer.query.all()
    serialized = []
    for ProviderOfferItem in ProviderOfferItems: 
        serialized.append({
            'id': ProviderOfferItem.id,
            'description': ProviderOfferItem.description,
            'price': ProviderOfferItem.price,
            'status': ProviderOfferItem.status,
        })
    return jsonify(serialized)

@app.route('/api/provideroffer', methods=['POST'])
def all_new_provideroffer():
    new_providerOffer = ProviderOffer(**request.json)
    session.add(new_providerOffer)
    session.commit()
    return {'message': 'Новое предложение от поставщика поступило'}

#BuyRequest (запрос на закупку)
@app.route('/api/buyrequest', methods=['GET'])
def get_buy_request_list():
    BuyRequests = BuyRequest.query.all()
    serialized = []
    for BuyRequestsItem in BuyRequests: 
        serialized.append({
            'id': BuyRequestsItem.id,
            'department': BuyRequestsItem.department,
            'description': BuyRequestsItem.description,
            'date': BuyRequestsItem.date,
            'status': BuyRequestsItem.status,
        })
    return jsonify(serialized)

@app.route('/api/buyrequest', methods=['POST'])
def add_new_buy_request():
    new_buy_request = BuyRequest(**request.json)
    session.add(new_buy_request)
    session.commit()
    return {'message': 'Создана новая заявка на закупку'}
    
# Employee
@app.route('/api/employee', methods=['GET'])
def get_employee_list():
    employeeItems =  Employee.query.all()
    serialized = []
    for employeeItem in employeeItems: 
        serialized.append({
            'id': employeeItem.id,
            'name': employeeItem.name,
            'surname': employeeItem.surname,
            'userType': employeeItem.userType,
            'description': employeeItem.description,
            'salary': employeeItem.salary,
            'status': employeeItem.status,
        })
    return jsonify(serialized)

@app.route('/api/employee', methods=['POST'])
def add_new_employee():
    new_employee = Employee(**request.json)
    session.add(new_employee)
    session.commit()
    return {'message': 'Создан новый работник'}

#Computer
@app.route('/api/сomputer', methods=['GET'])
def get_сomputer_list():
    сomputerItems =  Computer.query.all()
    serialized = []
    for сomputerItem in сomputerItems: 
        serialized.append({
            'id': сomputerItem.id,
            'status': сomputerItem.status,
            'information': сomputerItem.information, 
            'location': сomputerItem.location,
            'RentTime': сomputerItem.RentTime,
        })
    return jsonify(serialized)

@app.route('/api/updatecomputer', methods=['POST'])
def update_comp():
    new_comp = Computer(**request.json)
    old_comp = Computer.query.filter(
    Computer.id.like(new_comp.id)
    ).first()
    if not old_comp:
    	return {message: 'Такого компьютера нет'}, 500
    session.delete(old_comp)
    session.add(new_comp)
    session.commit()
    return {'message': 'Время аренды компьютера обновлено'}, 200

@app.route('/api/сomputer', methods=['POST'])
def add_new_сomputer():
    new_сomputer = Computer(**request.json)
    session.add(new_сomputer)
    session.commit()
    return {'message': 'Создан новый Компьютер'}

#ServiceRequest
@app.route('/api/servicerequest', methods=['GET'])
def get_servicerequest_list():
    ServiceRequests =  ServiceRequest.query.all()
    serialized = []
    for ServiceRequestItem in ServiceRequests: 
        serialized.append({
            'id': ServiceRequestItem.id,
            'computer_id': ServiceRequestItem.computer_id,
            'description': ServiceRequestItem.description, 
            'status': ServiceRequestItem.status,
        })
    return jsonify(serialized)

@app.route('/api/servicerequest', methods=['POST'])
def add_new_servicerequest():
    new_servicerequest = ServiceRequest(**request.json)
    session.add(new_servicerequest)
    session.commit()
    return {'message': 'Создана новая заявка на ремонт'}

@app.route('/api/updateservice', methods=['POST'])
def update_service():
    new_service = ServiceRequest(**request.json)
    old_service = ServiceRequest.query.filter(
    ServiceRequest.id.like(new_service.id)
    ).first()
    if not old_service:
    	return {message: 'Такой записи нет'}, 500
    session.delete(old_service)
    session.add(new_service)
    session.commit()
    return {'message': 'Заявка на ремонт закрыта'}, 200

### САМОЕ ВАЖНОЕ ИЗ ВСЕГО ###
#User (Логика авторизации)
@app.route('/api/authorization', methods=['POST'])
def authorization():
    user = User(**request.json)
    item = User.query.filter(
        User.login.like(user.login),
        User.password.like(user.password),
        ).first()
    if (not item):
        return {'message': 'Неверный логин или пароль'}, 500
    currentUser = Employee.query.filter(
        Employee.id.like(item.id)
    ).first()
    serialized = {
        'id': currentUser.id,
        'name': currentUser.name,
        'surname': currentUser.surname,
        'userType': currentUser.userType,
        'description': currentUser.description,
        'salary': currentUser.salary,
        'status': currentUser.status, 
    }
    return jsonify(serialized)

# session close
@app.teardown_appcontext
def shutdown_session(exception=None):
    session.remove()


if __name__ == '__main__':
    app.run(debug=True)