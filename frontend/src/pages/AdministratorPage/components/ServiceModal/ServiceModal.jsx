import { useRef } from "react";
import { useState } from "react";
import { Input, Modal, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { CreateServiceRequest } from "../../../../redux/actions/actionCreator";
import styles from "./ServiceModal.module.scss";

const ServiceModal = ({ isModalOpen, setIsModalOpen }) => {
	const computers = useSelector((state) => state.computer.computers);

	const [compId, setCompId] = useState(null);
	const inputDescription = useRef(null);
	const dispatch = useDispatch();

	const handleOk = () => {
		if (compId !== null) {
			dispatch(
				CreateServiceRequest({
					computer_id: compId,
					description:
						inputDescription.current?.resizableTextArea.textArea
							.value,
					status: "Создана",
				})
			);
		} else {
			message.warning("Вы не выбрали компьютер для ремонта");
		}
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const getValueForOption = (computers) => {
		const options = [];
		computers.forEach((comp) => {
			const option = {
				value: comp.id,
				label: comp.id,
			};
			options.push(option);
		});
		return options;
	};

	return (
		<Modal
			title="Форма создания заявки на ремонт"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText={"Создать заявку"}
			cancelText={"Отмена"}
		>
			<p className={styles.inputBlock}>
				Выберете id компьютера
				<Select
					options={getValueForOption(computers)}
					onChange={(value) => {
						setCompId(value);
					}}
				/>
			</p>
			<p className={styles.inputBlock}>
				Кратко опишите проблему
				<TextArea ref={inputDescription} rows={4} />
			</p>
		</Modal>
	);
};

export default ServiceModal;
