import React from "react";
import Inputs from "./inputs/Inputs";
import FilterIcon from "./filterIcon/FilterIcon";
import { Card, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
const Filter = ({
	showReset,
	showSearch,
	showApply,
	inputList,
	onApply,
	onReset,
	onSearch,
	tabName,
}) => {
	const theme = createTheme({
		typography: {
			fontFamily: "Heebo",
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					wrap="nowrap"
					spacing={2}
				>
					<FilterIcon />
					<Inputs
						inputList={inputList}
						showReset={showReset}
						showSearch={showSearch}
						showApply={showApply}
						onReset={onReset}
						onSearch={onSearch}
						onApply={onApply}
						tabName={tabName}
					/>
				</Grid>
			</Card>
		</ThemeProvider>
	);
};

export default Filter;
