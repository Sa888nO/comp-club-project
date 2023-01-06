import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../redux/actions/actionCreator";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
	const user = useSelector((state) => state.auth.user);
	console.log("user", user);
	const dispatch = useDispatch();
	const data = {
		login: "zera",
		password: "123",
	};
	const authLogin = () => {
		dispatch(login(data));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}> Войдите в рабочий аккаунт</div>
			<div className={styles.inputBlock}>
				<div> Логин </div>
				<Input />
			</div>
			<div className={styles.inputBlock}>
				<div> Пароль </div>
				<Input type="password" />
			</div>
			<Button type="primary" onClick={authLogin}>
				Войти
			</Button>
		</div>
	);
};

export default AuthPage;
