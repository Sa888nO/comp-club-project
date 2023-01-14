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
	const cpu = useRef(null);
	const ozu = useRef(null);
	const video = useRef(null);
	const dispatch = useDispatch();

	const handleOk = () => {
		console.log(inputInformation.current?.resizableTextArea.textArea.value);
		console.log(inputLocation.current?.resizableTextArea.textArea.value);
		if (
			inputInformation !== null &&
			inputLocation !== null &&
			inputInformation.current?.resizableTextArea.textArea.value !== "" &&
			inputLocation.current?.resizableTextArea.textArea.value !== "" &&
			cpu !== null &&
			cpu !== "" &&
			ozu !== null &&
			ozu !== "" &&
			video !== null &&
			video !== ""
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
					cpu: cpu.current?.resizableTextArea.textArea.value,
					ozu: ozu.current?.resizableTextArea.textArea.value,
					video: video.current?.resizableTextArea.textArea.value,
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
			<p className={styles.inputBlock}>
				Какой процессор?
				<TextArea ref={cpu} rows={1} />
			</p>
			<p className={styles.inputBlock}>
				Сколько оп. памяти?
				<TextArea ref={ozu} rows={1} />
			</p>
			<p className={styles.inputBlock}>
				Какая видеокарта?
				<TextArea ref={video} rows={1} />
			</p>
		</Modal>
	);
};

export default NewCompModal;
