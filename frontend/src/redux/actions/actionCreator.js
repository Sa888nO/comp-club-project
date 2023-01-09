import {
	CLOSE_CLEAN_REQUEST,
	CLOSE_SERVICE_REQUEST,
	CREATE_CLEAN_REQUEST,
	CREATE_NEW_COMPUTER,
	CREATE_SERVICE_REQUEST,
	GET_ALL_CLEAN_REQUESTS,
	GET_ALL_COMPUTERS,
	GET_ALL_EMPLOYEES,
	GET_ALL_SERVICE_REQUESTS,
	LOGIN,
	LOG_OUT,
	SET_ALL_COMPUTERS,
	SET_ALL_EMPLOYEES,
	SET_CLEAN_REQUESTS,
	SET_SERVICE_REQUESTS,
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
export const createNewComputer = (payload) => ({
	type: CREATE_NEW_COMPUTER,
	payload,
});

export const CreateCleanRequest = (payload) => ({
	type: CREATE_CLEAN_REQUEST,
	payload,
});

export const CreateServiceRequest = (payload) => ({
	type: CREATE_SERVICE_REQUEST,
	payload,
});
export const getAllServiceRequests = () => ({
	type: GET_ALL_SERVICE_REQUESTS,
});

export const setAllServiceRequests = (payload) => ({
	type: SET_SERVICE_REQUESTS,
	payload,
});

export const closeServiceRequest = (payload) => ({
	type: CLOSE_SERVICE_REQUEST,
	payload,
});

export const getAllCleanRequests = () => ({
	type: GET_ALL_CLEAN_REQUESTS,
});

export const setAllCleansRequests = (payload) => ({
	type: SET_CLEAN_REQUESTS,
	payload,
});

export const closeCleanRequest = (payload) => ({
	type: CLOSE_CLEAN_REQUEST,
	payload,
});
