import { useRef } from "react";
import AuthChecker from "@components/AuthChecker";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "./../../redux/actions/actionCreator";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
	const user = useSelector((state) => state.auth.user);
	console.log("user", user);
	const emp = useSelector((state) => state.employee.employees);
	console.log(emp);
	const RefLogin = useRef(null);
	const RefPassword = useRef(null);
	const dispatch = useDispatch();
	const authLogin = () => {
		dispatch(
			login({
				login: RefLogin.current?.input.value,
				password: RefPassword.current?.input.value,
			})
		);
	};

	if (user !== null) {
		return <AuthChecker />;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}> Войдите в рабочий аккаунт</div>
			<div className={styles.inputBlock}>
				<div> Логин </div>
				<Input ref={RefLogin} />
			</div>
			<div className={styles.inputBlock}>
				<div> Пароль </div>
				<Input type="password" ref={RefPassword} />
			</div>
			<Button type="primary" onClick={authLogin}>
				Войти
			</Button>
		</div>
	);
};

export default AuthPage;
