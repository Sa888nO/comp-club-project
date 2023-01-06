import { useState } from "react";
import RedAndBlackTree from "@components/RedAndBlackTree";
import UsualTree from "@components/UsualTree";
import { Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../redux/actions/actionCreator";
import ChangeButton from "./ChangeButton";
import styles from "./Tree.module.scss";

const Tree = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.employee.employees);
	console.log(user);
	const swapTree = () => {
		dispatch(getAllEmployees());
	};
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<div className={styles.header.Title}>sagasTest</div>
				{/* <ChangeButton click={swapTree} /> */}
				<Button type="primary" onClick={swapTree}>
					wwregf
				</Button>
			</header>
			<main className={styles.main}>
				{user.map((item, key) => {
					return <div key={key}>{item.name}</div>;
				})}
			</main>
		</div>
	);
};

export default Tree;
