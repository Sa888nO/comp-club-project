import { LOG_OUT, SET_USER } from "../constants";

const initialState = {
	user: null,
};

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_USER:
			return {
				...state,
				user: payload,
			};
		case LOG_OUT:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

export default auth;
