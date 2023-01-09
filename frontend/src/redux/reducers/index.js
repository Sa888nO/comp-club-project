import { combineReducers } from "redux";
import auth from "./auth";
import clean from "./clean";
import computer from "./computer";
import employee from "./employee";
import service from "./service";

const reducer = combineReducers({
	auth,
	employee,
	computer,
	clean,
	service,
});
export default reducer;
