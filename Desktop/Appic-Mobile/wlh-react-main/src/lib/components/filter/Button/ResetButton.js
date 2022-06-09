import React from "react";
import { Button } from "@mui/material";
import "./buttons.css";
const ResetButton = ({ onReset }) => {
	const handleClick = () => {
		onReset();
	};
	return (
		<Button
			id="button"
			variant="contained"
			size="medium"
			sx={{ backgroundColor: " #0073E6", textTransform: "none" }}
			onClick={handleClick}
		>
			Reset
		</Button>
	);
};
export default ResetButton;
