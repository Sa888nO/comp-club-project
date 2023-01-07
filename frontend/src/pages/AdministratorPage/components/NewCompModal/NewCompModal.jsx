import { useRef } from "react";
import { useState } from "react";
import { Input, Modal, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createNewComputer } from "../../../../redux/actions/actionCreator";
import styles from "./NewCompModal.module.scss";

const NewCompModal = ({ isModalOpen, setIsModalOpen }) => {
	const inputInformation = useRef(null);
	const inputLocation = useRef(null);
	const dispatch = useDispatch();

	const handleOk = () => {
		console.log(inputInformation.current?.resizableTextArea.textArea.value);
		console.log(inputLocation.current?.resizableTextArea.textArea.value);
		if (
			inputInformation !== null &&
			inputLocation !== null &&
			inputInformation.current?.resizableTextArea.textArea.value !== "" &&
			inputLocation.current?.resizableTextArea.textArea.value !== ""
		) {
			dispatch(
				createNewComputer({
					information:
						inputInformation.current?.resizableTextArea.textArea
							.value,
					location:
						inputLocation.current?.resizableTextArea.textArea.value,
					status: "Свободен",
					RentTime: "-",
				})
			);
		} else {
			message.warning("Вы не заполнили все поля");
		}
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Modal
			title="Форма заведения нового компьютера в базу"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText={"Завести компьютер"}
			cancelText={"Отмена"}
		>
			<p className={styles.inputBlock}>
				Опишите ключевые особенности компьютера - его характеристики
				<TextArea ref={inputInformation} rows={4} />
			</p>
			<p className={styles.inputBlock}>
				Где будет находиться космпьютер?
				<TextArea ref={inputLocation} rows={1} />
			</p>
		</Modal>
	);
};

export default NewCompModal;
