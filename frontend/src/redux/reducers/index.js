import { combineReducers } from "redux";
import auth from "./auth";
import computer from "./computer";
import employee from "./employee";

const reducer = combineReducers({
	auth,
	employee,
	computer,
});
export default reducer;
