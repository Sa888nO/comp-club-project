import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import LogoIcon from "./logo.svg";

export const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.container}>
			<div className={styles.footer__links}>
				<img width={112} height={112} src={LogoIcon} alt="Logo" />
				<ul>
					<li>
						<Link to="#">Скачать приложение</Link>
					</li>
					<li className={styles.adaptive}>
						<Link to="#">О нас</Link>
					</li>
					<li>
						<Link to="#">Обратная связь</Link>
					</li>

					<li>
						<Link to="#">Веб-версия</Link>
					</li>
					<li>
						<Link to="#">Партнеры</Link>
					</li>
				</ul>
			</div>
			<div className={styles.project}>
				<p>@мосполитех 2022</p>
				<p>Лаборатория инициативных проектов “Календарь жизни”</p>
			</div>
		</div>
	</footer>
);
