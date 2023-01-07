import {
	GET_ALL_COMPUTERS,
	GET_ALL_EMPLOYEES,
	LOGIN,
	LOG_OUT,
	SET_ALL_COMPUTERS,
	SET_ALL_EMPLOYEES,
	SET_USER,
} from "../constants";

export const getAllEmployees = () => ({
	type: GET_ALL_EMPLOYEES,
});

export const setAllEmployees = (payload) => ({
	type: SET_ALL_EMPLOYEES,
	payload,
});

export const login = (payload) => ({
	type: LOGIN,
	payload,
});
export const setUser = (payload) => ({
	type: SET_USER,
	payload,
});
export const logout = () => ({
	type: LOG_OUT,
});

export const getAllComputers = () => ({
	type: GET_ALL_COMPUTERS,
});
export const setAllComputers = (payload) => ({
	type: SET_ALL_COMPUTERS,
	payload,
});
