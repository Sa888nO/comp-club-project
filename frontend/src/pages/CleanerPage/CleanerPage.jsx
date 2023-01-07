import { useEffect } from "react";
import Header from "@components/Header";
import { Button } from "antd";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllCleanRequests } from "./../../redux/actions/actionCreator";
import styles from "./CleanerPage.module.scss";
const CleanerPage = () => {
	const user = useSelector((state) => state.auth.user);
	const cleanRequests = useSelector((state) => state.clean.cleans);
	console.log(cleanRequests);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCleanRequests());
		// setInterval(() => dispatch(getAllCleanRequests()), 20000);
	}, [dispatch]);

	if (user === null) return <Navigate to="/" />;

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div className={styles.title}>Заявки на уборку</div>
				{cleanRequests
					.sort((a, b) => (a.status > b.status ? -1 : 1))
					.map((item, key) => (
						<div
							className={classNames(styles.cleanRequest, {
								[styles.disabled]: item.status === "Закрыта",
							})}
							key={key}
						>
							<div className={styles.cleanReqBlock}>
								<span>Место</span>
								{item.location}
							</div>
							<div className={styles.cleanReqBlock}>
								<span>Статус</span>
								{item.status}
							</div>
							<Button
								disabled={
									item.status === "Закрыта" ? true : false
								}
							>
								Закрыть{" "}
							</Button>
						</div>
					))}
			</div>
		</div>
	);
};

export default CleanerPage;
