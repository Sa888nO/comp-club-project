import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styles from "./AuthChecker.module.scss";
const AuthChecker = () => {
	const userType = useSelector((state) => state.auth.user?.userType);
	console.log(userType);
	if (userType === undefined) {
		return <Navigate to="/" />;
	}
	if (userType === "Администратор") {
		return <Navigate to="/administrator" />;
	}
	if (userType === "Уборщик") {
		return <Navigate to="/cleaner" />;
	}
	if (userType === "Системный Администратор") {
		return <Navigate to="/service" />;
	}
	return <></>;
};

export default AuthChecker;
