import { SET_ALL_COMPUTERS } from "../constants";

const initialState = {
	computers: [],
};

const computer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ALL_COMPUTERS:
			return {
				...state,
				computers: [...payload],
			};
		default:
			return state;
	}
};

export default computer;
