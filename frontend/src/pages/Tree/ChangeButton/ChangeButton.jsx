import styles from "./ChangeButton.module.scss";

const ChangeButton = ({ click }) => {
	return (
		<button onClick={click}>
			<svg
				width="20px"
				height="20px"
				viewBox="2 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.1306 16.5049L15.1855 14.5597L16.2461 13.4991L20.002 17.2549L16.2461 21.0108L15.1855 19.9502L17.1307 18.0049H4.99761V12.0005L6.49761 12.0005V16.5049H17.1306Z"
					fill="#1F2328"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.87883 5.99617L8.83128 4.05205L7.7729 2.98912L3.99973 6.74618L7.7729 10.5032L8.83128 9.44021L6.87885 7.49617L17.4976 7.49617V11.9916H18.9976V5.99617L6.87883 5.99617Z"
					fill="#1F2328"
				/>
			</svg>
		</button>
	);
};

export default ChangeButton;
