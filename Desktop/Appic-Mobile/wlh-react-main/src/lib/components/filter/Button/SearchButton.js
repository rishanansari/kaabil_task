import React from "react";
import { Button } from "@mui/material";
import "./buttons.css";

function SearchButton({ onSearch }) {
	return (
		<Button
			variant="contained"
			size="medium"
			id="button"
			sx={{
				backgroundColor: " #0073E6",
				textTransform: "none",
				color: "#F0F0F0",
			}}
			onClick={() => onSearch()}
		>
			Search
		</Button>
	);
}

export default SearchButton;
