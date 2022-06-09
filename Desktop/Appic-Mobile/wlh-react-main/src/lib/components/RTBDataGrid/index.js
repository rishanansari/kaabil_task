import React, { useState, useMemo } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import DownloadIcon from "@mui/icons-material/Download";
import CsvDownload from "react-json-to-csv";
// import GlobalFilter from "./components/GlobalFilter";
import { Checkbox } from "./components/CheckBox";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import "./styles.css";

export const DefaultColumnFilter = ({
	column: { filterValue, preFilteredRows, setFilter },
}) => {
	const count = preFilteredRows.length;

	return (
		<input
			value={filterValue || ""}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder={`Search ${count} records...`}
		/>
	);
};

export const NumberRangeColumnFilter = ({
	column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
	const [min, max] = React.useMemo(() => {
		let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
		let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
		preFilteredRows.forEach((row) => {
			min = Math.min(row.values[id], min);
			max = Math.max(row.values[id], max);
		});
		return [min, max];
	}, [id, preFilteredRows]);

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<input
				value={filterValue[0] || ""}
				type="number"
				onChange={(e) => {
					const val = e.target.value;
					console.log(parseInt(val, 10));
					setFilter((old = []) => [
						val ? parseInt(val, 10) : undefined,
						old[1],
					]);
				}}
				placeholder={`Min (${min})`}
				style={{
					width: "70px",
					marginRight: "0.5rem",
				}}
			/>
			to
			<input
				value={filterValue[1] || ""}
				type="number"
				onChange={(e) => {
					const val = e.target.value;
					setFilter((old = []) => [
						old[0],
						val ? parseInt(val, 10) : undefined,
					]);
				}}
				placeholder={`Max (${max})`}
				style={{
					width: "70px",
					marginLeft: "0.5rem",
				}}
			/>
		</div>
	);
};

export default function RTBDataGrid({
	columns,
	data,
	headerColor,
	onRowClickFunction,
	searchFilterMethod,
}) {
	const defaultColumn = useMemo(() => {
		return {
			Filter: DefaultColumnFilter,
		};
	}, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		allColumns,
		getToggleHideAllColumnsProps,
		state,
		setGlobalFilter,
		onRowClick,
		filterTypes,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			onRowClick: (rowObject) => {
				onRowClickFunction(rowObject);
			},
		},
		useGlobalFilter,
		useFilters,
		useSortBy
	);

	// menu items
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { globalFilter } = state;
	searchFilterMethod(globalFilter, setGlobalFilter);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					padding: "2em",
				}}
			>
				<div>
					<Button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<FilterAltOffIcon />
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<div style={{ padding: "1em" }}>
							<div>
								<Checkbox {...getToggleHideAllColumnsProps()} />{" "}
								Toggle All
							</div>
							{allColumns.map((column) => (
								<div key={column.id}>
									{/* {console.log(column)} */}
									<label>
										<input
											type="checkbox"
											{...column.getToggleHiddenProps()}
										/>{" "}
										{column.Header}
									</label>
								</div>
							))}
							<br />
						</div>
					</Menu>
				</div>
			</div>

			<table
				{...getTableProps()}
				style={{
					width: "100%",
					display: "table",
					tableLayout: "fixed",
					borderCollapse: "collapse",
				}}
			>
				<thead style={{ backgroundColor: `${headerColor}` }}>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
									style={{
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "ellipsis",
									}}
								>
									{column.render("Header")}
									<span>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<ExpandMoreIcon />
											) : (
												<ExpandLessIcon />
											)
										) : (
											""
										)}
									</span>
									<div>
										{column.canFilter
											? column.render("Filter")
											: null}
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr
								{...row.getRowProps({
									onClick: () => onRowClick(row),
								})}
								style={{
									borderRight: row.original.colorCode
										? `2px solid ${row.original.colorCode}`
										: "",
								}}
							>
								{row.cells.map((cell) => {
									return (
										<td
											{...cell.getCellProps()}
											style={{
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "ellipsis",
												border: "1px solid #C9CDD6",
											}}
										>
											{cell.render("Cell")}{" "}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
