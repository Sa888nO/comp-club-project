import { useRef, useState } from "react";
import { Button, Input, Modal, message, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
	CreateCleanRequest,
	updateCompTime,
	creatIncome,
} from "../../../../redux/actions/actionCreator";

import styles from "./RentModal.module.scss";

const RentModal = ({ isModalOpen, setIsModalOpen }) => {
	const computers = useSelector((state) => state.computer.computers);
	const [compId, setCompId] = useState(null);

	const getValueForOption = (computers) => {
		const options = [];
		computers.forEach((comp) => {
			const option = {
				value: comp.id,
				label: comp.id,
			};
			if (comp.RentTime === "-") {
				options.push(option);
			} else {
				const t1 = new Date(comp.RentTime);
				const t2 = new Date();
				if (t1 < t2) {
					options.push(option);
				}
			}
		});
		return options;
	};

	const inputPrice = useRef(null);
	const inputHours = useRef(null);

	const dispatch = useDispatch();

	const handleOk = () => {
		if (
			inputHours.current.input.value !== "" &&
			inputPrice.current.input.value !== "" &&
			compId !== null
		) {
			const rentTime = new Date();
			console.log(rentTime);
			rentTime.setHours(
				rentTime.getHours() + +inputHours.current.input.value
			);
			dispatch(
				updateCompTime({
					id: compId,
					status: "Свободен",
					information: computers[compId - 1].information,
					RentTime: rentTime,
					location: computers[compId - 1].location,
					cpu: computers[compId - 1].cpu,
					ozu: computers[compId - 1].ozu,
					video: computers[compId - 1].video,
				})
			);
			const rentPrice =
				inputPrice.current.input.value * inputHours.current.input.value;
			const rentDate = new Date();
			dispatch(
				creatIncome({
					incomeType: "Сдача компьютера в аренду",
					money: rentPrice,
					date: rentDate,
				})
			);
		} else {
			message.error("Вы не заполнили все поля");
		}
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Modal
			title="Форма проведения аренды компьютера"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText={"Готово"}
			cancelText={"Отмена"}
			destroyOnClose={true}
		>
			<p className={styles.inputBlockNum}>
				Выберете id компьютера
				{getValueForOption(computers).length !== 0 ? (
					<Select
						options={getValueForOption(computers)}
						onChange={(value) => {
							setCompId(value);
						}}
					/>
				) : (
					<div className={styles.warn}>
						К сожалению свободных компьютеров нет
					</div>
				)}
			</p>
			<p className={styles.inputBlockNum}>
				цена за час в руб.
				<Input
					ref={inputPrice}
					type="number"
					className={styles.inputNum}
				/>
			</p>
			<p className={styles.inputBlockNum}>
				время аренды *в часах*
				<Input
					ref={inputHours}
					type="number"
					className={styles.inputNum}
				/>
			</p>
		</Modal>
	);
};

export default RentModal;
