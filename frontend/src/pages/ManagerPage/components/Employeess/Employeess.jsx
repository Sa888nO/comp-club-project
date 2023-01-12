import { useSelector } from "react-redux";
import styles from "./Employeess.module.scss";

const Employeess = () => {
	const employees = useSelector((state) => state.employee.employees);
	console.log(employees);
	return (
		<div>
			<div className={styles.title}>Список сотрудников</div>
			<div>
				{employees.map((emp) => (
					<div className={styles.empCard}>
						<div className={styles.empNameBlock}>
							<div>{emp.name}</div>
							<div>{emp.surname}</div>
						</div>
						<div className={styles.block}>
							<div>Описание:</div>
							<div className={styles.span}>{emp.description}</div>
						</div>
						<div className={styles.block}>
							<div>Зарплата:</div>
							<div className={styles.span}>{emp.salary} р.</div>
						</div>
						<div className={styles.block}>
							<div>Статус сотрудника:</div>
							<div className={styles.span}>{emp.status}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Employeess;
