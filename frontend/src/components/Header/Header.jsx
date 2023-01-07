import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../redux/actions/actionCreator";
import styles from "./Header.module.scss";

const Header = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
		message.info(
			"Вы вышли из аккаунта, для дальнейшей работы требуется авторизация"
		);
	};

	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<div className={styles.userName}>
					<span>Сотрудник:</span>
					<div>{user.name}</div>
					<div>{user.surname}</div>
				</div>
				<div className={styles.userName}>
					<span>Должность:</span>
					<div>{user.userType}</div>
				</div>
			</div>
			<Button type="primary" danger={true} onClick={logOut}>
				Выйти
			</Button>
		</header>
	);
};

export default Header;
