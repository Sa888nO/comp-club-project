import { combineReducers } from "redux";
import auth from "./auth";
import clean from "./clean";
import computer from "./computer";
import employee from "./employee";
import income from "./income";
import service from "./service";

const reducer = combineReducers({
	auth,
	employee,
	computer,
	clean,
	service,
	income,
});
export default reducer;
