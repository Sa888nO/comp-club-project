import { message } from "antd";
import { useDispatch } from "react-redux";
import { takeEvery, put, call, take } from "redux-saga/effects";
import {
	setAllCleansRequests,
	setAllComputers,
	setAllEmployees,
	setUser,
} from "../actions/actionCreator";
import {
	CLOSE_CLEAN_REQUEST,
	CREATE_CLEAN_REQUEST,
	CREATE_NEW_COMPUTER,
	CREATE_SERVICE_REQUEST,
	GET_ALL_CLEAN_REQUESTS,
	GET_ALL_COMPUTERS,
	GET_ALL_EMPLOYEES,
	LOGIN,
} from "../constants";
import {
	getAllComputers,
	getAllEmployees,
	login,
	CreateCleanRequest,
	CreateServiceRequest,
	CreateNewComputer,
	getAllCleanRequests,
	closeCleanRequest,
} from "./../../api/index";

export function* handleAllEmployees() {
	try {
		const data = yield getAllEmployees();
		yield put(setAllEmployees(data));
		message.success("ок");
	} catch (error) {
		message.warning("Произошла ошибка при получении всех сотрудников");
	}
}

export function* userLogin({ payload }) {
	try {
		const data = yield login(payload);
		if (data.message !== undefined) {
			throw new Error();
		}
		yield put(setUser(data));
		message.success("Успешная авторизация");
	} catch (error) {
		message.warning("Неверный логин или пароль");
	}
}

export function* handleAllComputers() {
	try {
		const data = yield getAllComputers();
		console.log(data);
		if (data.message !== undefined) {
			throw new Error();
		}
		yield put(setAllComputers(data));
		message.success("Список компьютеров успешно получен");
	} catch (error) {
		message.warning("Произошла ошибка при получении всех компьютеров");
	}
}

export function* createCleanReq({ payload }) {
	try {
		yield CreateCleanRequest(payload);
		message.success("Заявка на уборку успешно создана");
	} catch (error) {
		message.success("Заявка на уборку успешно создана");
	}
}

export function* createServiceReq({ payload }) {
	try {
		yield CreateServiceRequest(payload);
		message.success("Заявка на ремонт успешно создана");
	} catch (error) {
		message.warning("Произошла ошибка при создании заявки на ремонт");
	}
}
export function* createNewComp({ payload }) {
	try {
		yield CreateNewComputer(payload);
		message.success("Компьютер успешно заведен в базу");
	} catch (error) {
		message.warning("Произошла ошибка при заведении компьютера в базу");
	}
	try {
		const data = yield handleAllComputers();
		yield put(setAllComputers(data));
		message.success("Список компьютеров успешно получен");
	} catch (error) {}
}

export function* handleAllCleanRequests() {
	try {
		const data = yield getAllCleanRequests();
		yield put(setAllCleansRequests(data));
		message.success("Все заявки на уборку успешно получены");
	} catch (error) {
		message.warning("Произошла ошибка при получении всех заявок на уборку");
	}
}

export function* closeCleanReq({ payload }) {
	try {
		yield closeCleanRequest(payload);
		message.success("Заявка успешно закрыта");
	} catch (error) {
		message.warning("Произошла ошибка при закрытии заявки на уборку");
	}
	try {
		const data = yield handleAllCleanRequests();
		yield put(setAllCleansRequests(data));
		message.success("Все заявки на уборку успешно получены");
	} catch (error) {}
}

export function* watchClickSaga() {
	yield takeEvery(GET_ALL_EMPLOYEES, handleAllEmployees);
	yield takeEvery(LOGIN, userLogin);
	yield takeEvery(GET_ALL_COMPUTERS, handleAllComputers);
	yield takeEvery(CREATE_CLEAN_REQUEST, createCleanReq);
	yield takeEvery(CREATE_SERVICE_REQUEST, createServiceReq);
	yield takeEvery(CREATE_NEW_COMPUTER, createNewComp);
	yield takeEvery(GET_ALL_CLEAN_REQUESTS, handleAllCleanRequests);
	yield takeEvery(CLOSE_CLEAN_REQUEST, closeCleanReq);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
