import { GET_ALL_EMPLOYEES, SET_ALL_EMPLOYEES } from "../constants";

const initialState = {
	employees: [],
};

const employee = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ALL_EMPLOYEES:
			return {
				...state,
				employees: [...payload],
			};
		default:
			return state;
	}
};

export default employee;
