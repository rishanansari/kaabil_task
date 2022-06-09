import React from "react";
import Field from "./Field";
import { Grid } from "@mui/material";
import ApplyButton from "../Button/ApplyButton";
import ResetButton from "../Button/ResetButton";
import SearchButton from "../Button/SearchButton";
const Inputs = ({
	inputList,
	showReset,
	showSearch,
	showApply,
	onReset,
	onApply,
	onSearch,
}) => {
	return (
		<>
			{inputList &&
				inputList.map((element, id) => (
					<Grid item lg={Math.round(12 / inputList.length)} key={id}>
						<Field element={element} />
					</Grid>
				))}
			{showApply ? (
				<Grid item lg={1}>
					<ApplyButton onApply={onApply} />
				</Grid>
			) : (
				""
			)}
			{showSearch ? (
				<Grid item lg={1}>
					<SearchButton onSearch={onSearch} />
				</Grid>
			) : (
				""
			)}
			{showReset && showReset ? (
				<Grid item lg={1}>
					<ResetButton onReset={onReset} />
				</Grid>
			) : (
				""
			)}
		</>
	);
};

export default Inputs;
