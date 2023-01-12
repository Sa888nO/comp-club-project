import { SET_ALL_INCOME } from "../constants";

const initialState = {
	incomes: [],
};

const income = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ALL_INCOME:
			return {
				...state,
				incomes: [...payload],
			};
		default:
			return state;
	}
};

export default income;
