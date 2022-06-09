import React from "react";

//-----> css
import "./button.css";

const Button = ({ data }) => {
	const { component, method } = data;
	return (
		<>
			<button
				onClick={() => {
					method();
				}}
				className="optional-button"
			>
				{component}
			</button>
		</>
	);
};

export default Button;
