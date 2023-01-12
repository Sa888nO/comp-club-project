import { useEffect, useState } from "react";
import Header from "@components/Header";
import { Button } from "antd";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
	closeCleanRequest,
	getAllCleanRequests,
	getAllEmployees,
	getAllIncomes,
} from "./../../redux/actions/actionCreator";
import Employeess from "./components/Employeess";
import Incomes from "./components/Incomes";
import styles from "./ManagerPage.module.scss";
const ManagerPage = () => {
	const user = useSelector((state) => state.auth.user);
	const cleanRequests = useSelector((state) => state.clean.cleans);
	console.log(cleanRequests);
	const dispatch = useDispatch();
	const [currentBlock, setCurrentBlock] = useState(true);

	useEffect(() => {
		dispatch(getAllEmployees());
		dispatch(getAllIncomes());
	}, [dispatch]);

	if (user === null) return <Navigate to="/" />;

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.buttons}>
				<Button>Информация о сотрудниках</Button>
				<Button>Информация о доходах</Button>
			</div>
			<div className={styles.content}>
				{currentBlock ? <Incomes /> : <Employeess />}
			</div>
		</div>
	);
};

export default ManagerPage;
