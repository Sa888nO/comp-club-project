import { combineReducers } from "redux";
import auth from "./auth";
import clean from "./clean";
import computer from "./computer";
import employee from "./employee";

const reducer = combineReducers({
	auth,
	employee,
	computer,
	clean,
});
export default reducer;
