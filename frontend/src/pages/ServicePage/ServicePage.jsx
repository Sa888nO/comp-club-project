import { useEffect } from "react";
import Header from "@components/Header";
import { Button } from "antd";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
	closeServiceRequest,
	getAllServiceRequests,
} from "./../../redux/actions/actionCreator";
import styles from "./ServicePage.module.scss";
const ServicePage = () => {
	const user = useSelector((state) => state.auth.user);
	const ServiceRequests = useSelector(
		(state) => state.service.serviceRequests
	);
	console.log(ServiceRequests);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllServiceRequests());
	}, [dispatch]);

	if (user === null) return <Navigate to="/" />;

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.title}>Заявки на ремонт</div>
			<div className={styles.content}>
				{ServiceRequests.sort((a, b) =>
					a.status > b.status ? -1 : 1
				).map((item, key) => (
					<div
						className={classNames(styles.cleanRequest, {
							[styles.disabled]: item.status === "Закрыта",
						})}
						key={key}
					>
						<div className={styles.cleanReqBlock}>
							<span>Номер компьютера:</span>
							<span className={styles.compTitle}>
								{item.computer_id}
							</span>
						</div>
						<div className={styles.cleanReqBlock}>
							<span>Описание проблемы:</span>
							{item.description}
						</div>
						<Button
							disabled={item.status === "Закрыта" ? true : false}
							onClick={() => {
								dispatch(
									closeServiceRequest({
										id: item.id,
										computer_id: item.computer_id,
										description: item.description,
										status: "Закрыта",
									})
								);
							}}
						>
							Закрыть заявку
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServicePage;
