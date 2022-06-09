import React from "react";
import { Button } from "@mui/material";
import "./buttons.css";

const ApplyButton = ({ onApply }) => {
	const handleClick = () => {
		onApply();
	};
	return (
		<Button
			id="button"
			variant="contained"
			size="medium"
			sx={{ backgroundColor: " #0073E6", textTransform: "none" }}
			onClick={handleClick}
		>
			Apply
		</Button>
	);
};

export default ApplyButton;
