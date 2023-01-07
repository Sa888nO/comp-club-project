import { message } from "antd";
import { takeEvery, put, call } from "redux-saga/effects";
import {
	setAllComputers,
	setAllEmployees,
	setUser,
} from "../actions/actionCreator";
import { GET_ALL_COMPUTERS, GET_ALL_EMPLOYEES, LOGIN } from "../constants";
import { getAllComputers, getAllEmployees, login } from "./../../api/index";

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

export function* watchClickSaga() {
	yield takeEvery(GET_ALL_EMPLOYEES, handleAllEmployees);
	yield takeEvery(LOGIN, userLogin);
	yield takeEvery(GET_ALL_COMPUTERS, handleAllComputers);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
