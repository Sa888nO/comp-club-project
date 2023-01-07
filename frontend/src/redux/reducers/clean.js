import { SET_CLEAN_REQUESTS } from "../constants";

const initialState = {
	cleans: [],
};

const clean = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CLEAN_REQUESTS:
			return {
				...state,
				cleans: [...payload],
			};
		default:
			return state;
	}
};

export default clean;
