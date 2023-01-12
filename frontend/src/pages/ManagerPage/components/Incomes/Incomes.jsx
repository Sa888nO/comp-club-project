import { useSelector } from "react-redux";
import styles from "./Incomes.module.scss";

const Incomes = () => {
	const incomes = useSelector((state) => state.income.incomes);
	console.log(incomes);
	return (
		<div>
			<div className={styles.title}>Доходы клуба</div>
			<div className={styles.money}>
				Суммарный доход за период:{" "}
				<span>
					{incomes
						.map((item) => item.money)
						.reduce((sum, ac) => sum + ac, 0)}{" "}
				</span>
				руб.
			</div>
			<div className={styles.title}>Детальная информация</div>
			<div>
				{incomes.map((inc) => (
					<div className={styles.incItem}>
						<div className={styles.empDateBlock}>
							<div>Дата и время получения средств</div>
							<span>{new Date(inc.date).toString()}</span>
						</div>
						<div className={styles.empOpBlock}>
							<div>Операция</div>
							<span>{inc.incomeType}</span>
						</div>
						<div className={styles.empMBlock}>
							<div>Доход</div>
							<span>{inc.money}</span> руб.
						</div>
						{/* <div className={styles.block}>
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
						</div> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Incomes;
