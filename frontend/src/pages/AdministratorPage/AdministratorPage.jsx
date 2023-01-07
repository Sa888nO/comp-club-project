import { useEffect, useState } from "react";
import AuthChecker from "@components/AuthChecker";
import Header from "@components/Header";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllComputers } from "./../../redux/actions/actionCreator";
import styles from "./AdministratorPage.module.scss";
import CreatCleanRequestModal from "./components/CleaningModal";
import NewCompModal from "./components/NewCompModal";
import ServiceModal from "./components/ServiceModal";

const AdministratorPage = () => {
	const user = useSelector((state) => state.auth.user);
	const computers = useSelector((state) => state.computer.computers);
	const dispatch = useDispatch();

	const [isCleanModalOpen, setIsCleanModalOpen] = useState(false);
	const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
	const [isNewCompModalOpen, setIsNewCompModalOpen] = useState(false);

	const showNewCompModal = () => {
		setIsNewCompModalOpen(true);
	};
	const showCleanModal = () => {
		setIsCleanModalOpen(true);
	};
	const showServiceModal = () => {
		setIsServiceModalOpen(true);
	};

	useEffect(() => {
		dispatch(getAllComputers());
		// setInterval(() => dispatch(getAllComputers()), 20000);
	}, [dispatch]);

	if (user === null) return <Navigate to="/" />;

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div className={styles.controllerButtons}>
					<Button type="primary">Сдать компьютер в аренду</Button>
					<div className={styles.subButtons}>
						<Button onClick={showNewCompModal}>
							Добавить новый компьютер
						</Button>
						<Button onClick={showCleanModal}>
							Создать заявку на уборку
						</Button>
						<Button onClick={showServiceModal}>
							Создать заявку на ремонт
						</Button>
					</div>
				</div>
				<div className={styles.title}>Список всех компьютеров</div>
				{computers.map((item) => (
					<div>{item.information}</div>
				))}
			</div>
			<CreatCleanRequestModal
				isModalOpen={isCleanModalOpen}
				setIsModalOpen={setIsCleanModalOpen}
			/>
			<ServiceModal
				isModalOpen={isServiceModalOpen}
				setIsModalOpen={setIsServiceModalOpen}
			/>
			<NewCompModal
				isModalOpen={isNewCompModalOpen}
				setIsModalOpen={setIsNewCompModalOpen}
			/>
		</div>
	);
};

export default AdministratorPage;
