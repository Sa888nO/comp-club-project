import { SET_SERVICE_REQUESTS } from "../constants";

const initialState = {
	serviceRequests: [],
};

const service = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SERVICE_REQUESTS:
			return {
				...state,
				serviceRequests: [...payload],
			};
		default:
			return state;
	}
};

export default service;
