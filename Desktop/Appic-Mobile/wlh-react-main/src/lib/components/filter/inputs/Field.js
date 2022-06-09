import React from "react";
import {
	Select,
	MenuItem,
	InputLabel,
	Box,
	FormControl,
	Checkbox,
	Button,
	TextField,
} from "@mui/material";
import "./field.css";
const Field = ({ element }) => {
	const renderInputs = ({
		disabled,
		name,
		key,
		value,
		onChange,
		placeholder,
		type,
		options,
		component,
		error,
	}) => {
		const handleChange = (e) => {
			if (type === "checkbox") onChange(e.target.checked, e.target.name);
			else onChange(e.target.value, e.target.name);
		};
		switch (type) {
			case "text":
				return (
					<>
						<TextField
							variant="outlined"
							name={name}
							id={key}
							value={value}
							error={error && error}
							label={placeholder}
							InputLabelProps={{
								className: "filter-field-label",
							}}
							onChange={handleChange}
							disabled={disabled}
							sx={{ width: "100%", fontSize: "13px" }}
							size="small"
						/>
					</>
				);
			case "select":
				return (
					<>
						<Box>
							<FormControl sx={{ width: "90%" }} size="small">
								<InputLabel
									id={key}
									className="filter-field-label"
								>
									{placeholder}
								</InputLabel>
								<Select
									labelId={key}
									value={value}
									name={name}
									InputLabelProps={{
										className: "filter-field-label",
									}}
									label={placeholder}
									onChange={handleChange}
									disabled={disabled}
								>
									{typeof options[0] === "string"
										? options.map((option, id) => (
												<MenuItem
													value={option}
													key={id}
												>
													{option}
												</MenuItem>
										  ))
										: options.map((option, id) => (
												<MenuItem
													value={option.id}
													key={id}
												>
													{option.name}
												</MenuItem>
										  ))}
								</Select>
							</FormControl>
						</Box>
					</>
				);
			case "autocomplete":
				return (
					<div
						style={{
							height: "50px",
							display: "flex",
							alignItems: "center",
							fontSize: "13px",
						}}
					>
						{component}
					</div>
				);
			case "checkbox":
				return (
					<>
						<Checkbox
							name={name}
							id={key}
							value={value}
							onChange={handleChange}
							disabled={disabled}
							icon={
								<Button
									variant="contained"
									sx={{ backgroundColor: " #0073E6" }}
								>
									{placeholder}
								</Button>
							}
							checkedIcon={
								<Button
									variant="disabled"
									sx={{ backgroundColor: " #0073E6" }}
								>
									{placeholder}
								</Button>
							}
						/>
					</>
				);
			case "button":
				return (
					<>
						<Button
							id={"button"}
							className={key}
							name={name}
							variant={disabled ? "outlined" : "contained"}
							size="medium"
							style={{
								borderRadius: "30px",
								fontSize: disabled ? "13px" : "15px",
								backgroundColor: disabled ? "#fff" : "#0073E6",
								color: disabled ? "#979DAC" : "#fff",
								borderColor: disabled ? "#979DAC" : "#0073E6",
								textTransform: "none",
								fontWeight: disabled ? "normal" : "bold",
							}}
							onClick={onChange}
						>
							{placeholder}
						</Button>
					</>
				);

			default:
				return <>NO INPUTS</>;
		}
	};
	return <>{renderInputs(element)}</>;
};

export default Field;
