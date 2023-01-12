import { useEffect, useState } from "react";
import AuthChecker from "@components/AuthChecker";
import Header from "@components/Header";
import { Button } from "antd";
import classNames from "classnames";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAllComputers } from "./../../redux/actions/actionCreator";
import styles from "./AdministratorPage.module.scss";
import CreatCleanRequestModal from "./components/CleaningModal";
import NewCompModal from "./components/NewCompModal";
import RentModal from "./components/RentModal";
import ServiceModal from "./components/ServiceModal";

const AdministratorPage = () => {
	const user = useSelector((state) => state.auth.user);
	const computers = useSelector((state) => state.computer.computers);
	const dispatch = useDispatch();

	///
	// const Time1 = new Date();
	// const Time2 = new Date(
	// 	"Tue Jan 10 2023 23:41:42 GMT+0300 (Москва, стандартное время)"
	// );
	// Time1.setHours(Time1.getHours() + 2);
	// console.log(Time1);
	// console.log(computers);
	///

	const [isCleanModalOpen, setIsCleanModalOpen] = useState(false);
	const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
	const [isNewCompModalOpen, setIsNewCompModalOpen] = useState(false);
	const [isNewRentOpen, setIsNewRentOpen] = useState(false);

	const IsTimeLost = (time) => {
		if (time === "-") return true;
		const compDate = new Date(time);
		const currentDate = new Date();
		return currentDate > compDate;
	};
	const whileLost = (time) => {
		const lostTime = new Date(time);
		const thisTime = new Date();
		let whileLostTime = lostTime.getTime() - thisTime.getTime();
		const hours = Math.floor(whileLostTime / 1000 / 3600);
		const minuts = Math.floor(((whileLostTime / 1000) % 3600) / 60);
		return `${hours} ч. ${minuts} м.`;
	};
	const showNewCompModal = () => {
		setIsNewCompModalOpen(true);
	};
	const showCleanModal = () => {
		setIsCleanModalOpen(true);
	};
	const showServiceModal = () => {
		setIsServiceModalOpen(true);
	};
	const showRentModal = () => {
		setIsNewRentOpen(true);
	};

	useEffect(() => {
		dispatch(getAllComputers());
	}, [dispatch]);

	if (user === null) return <Navigate to="/" />;

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div className={styles.controllerButtons}>
					<Button type="primary" onClick={showRentModal}>
						Сдать компьютер в аренду
					</Button>
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
				<div className={styles.computers}>
					{computers.map((item, key) => (
						<div
							className={classNames(styles.comp, {
								[styles.compIsClose]: !IsTimeLost(
									item.RentTime
								),
							})}
							key={key}
						>
							<img
								width={"50%"}
								src="https://internet-lab.ru/sites/internet-lab.ru/files/styles/shirokiy/public/2019-05/computer.png?itok=CJoYKVhS"
								alt="computer"
							/>
							<div>Номер компьютера: {item.id}</div>
							<div>
								Статус:{" "}
								{IsTimeLost(item.RentTime) ? (
									"Свободен"
								) : (
									<>Занят ещё {whileLost(item.RentTime)}</>
								)}
							</div>
							<div className={styles.infoBlock}>
								<div>Описание: {item.information}</div>
							</div>
						</div>
					))}
				</div>
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
			<RentModal
				isModalOpen={isNewRentOpen}
				setIsModalOpen={setIsNewRentOpen}
			/>
		</div>
	);
};

export default AdministratorPage;
