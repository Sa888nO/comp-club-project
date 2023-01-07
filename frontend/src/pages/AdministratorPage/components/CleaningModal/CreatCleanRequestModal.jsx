import { useRef } from "react";
import { Button, Input, Modal, message } from "antd";
import { useDispatch } from "react-redux";
import { CreateCleanRequest } from "../../../../redux/actions/actionCreator";
import styles from "./CreatCleanRequestModal.module.scss";

const CreatCleanRequestModal = ({ isModalOpen, setIsModalOpen }) => {
	const inputLocation = useRef(null);
	const dispatch = useDispatch();

	const handleOk = () => {
		if (
			inputLocation !== null &&
			inputLocation.current?.input.value !== ""
		) {
			dispatch(
				CreateCleanRequest({
					location: inputLocation.current?.input.value,
					status: "Создана",
				})
			);
		} else {
			message.warning("Вы не ввели локацию для уборки");
		}
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Modal
			title="Форма создания заявки на уборку"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			okText={"Создать заявку"}
			cancelText={"Отмена"}
		>
			<p className={styles.inputBlock}>
				Где необходимо убраться?
				<Input ref={inputLocation} />
			</p>
		</Modal>
	);
};

export default CreatCleanRequestModal;
