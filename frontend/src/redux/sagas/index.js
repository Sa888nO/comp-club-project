import { message } from "antd";
import { takeEvery, put, call } from "redux-saga/effects";
import { setAllEmployees, setUser } from "../actions/actionCreator";
import { GET_ALL_EMPLOYEES, LOGIN } from "../constants";
import { getAllEmployees, login } from "./../../api/index";

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
		console.log(data);
		if (data.message !== undefined) {
			throw new Error();
		}
		yield put(setUser(data));
		// message.success("ок");
	} catch (error) {
		message.warning("Неверный логин или пароль");
	}
}

export function* watchClickSaga() {
	yield takeEvery(GET_ALL_EMPLOYEES, handleAllEmployees);
	yield takeEvery(LOGIN, userLogin);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
