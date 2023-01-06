import {
	GET_ALL_EMPLOYEES,
	LOGIN,
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
