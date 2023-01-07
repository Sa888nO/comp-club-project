import { useEffect } from "react";
import AuthChecker from "@components/AuthChecker";
import Header from "@components/Header";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllComputers } from "./../../redux/actions/actionCreator";
import styles from "./AdministratorPage.module.scss";

const AdministratorPage = () => {
	const user = useSelector((state) => state.auth.user);
	const computers = useSelector((state) => state.computer.computers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllComputers());
	}, [dispatch]);
	if (user === null) return <Navigate to="/" />;
	return (
		<div className={styles.wrapper}>
			<Header />
			{computers.map((item) => (
				<div>{item.information}</div>
			))}
		</div>
	);
};

export default AdministratorPage;
