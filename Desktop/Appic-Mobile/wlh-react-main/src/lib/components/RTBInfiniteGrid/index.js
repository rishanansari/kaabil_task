import React, { useState, useMemo } from "react";
import { styled } from "@mui/material/styles";
import makeData from "./components/makeData";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { CSVLink } from "react-csv";
import DownloadIcon from "@mui/icons-material/Download";
import GlobalFilter from "./components/GlobalFilter";
import { Checkbox } from "./components/CheckBox";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  useBlockLayout,
  useResizeColumns,
} from "react-table";
import "./styles.css";

import InfiniteScroll from "react-infinite-scroll-component";

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

function RTBInfiniteGrid({
  columns,
  data,
  headerColor,

  update,
  fetchRowCount,
}) {
  const defaultColumn = useMemo(() => {
    return {
      Filter: DefaultColumnFilter,
      minWidth: 30,
      maxWidth: 400,
    };
  }, []);

  const onRowClickFunction = (rowObject) => {
    console.log("rowobject", rowObject);
  };

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
    useSortBy,
    useBlockLayout,
    useResizeColumns
  );

  //menu items
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { globalFilter } = state;
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
        <div
          style={{
            display: "flex",
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
                  <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
                </div>
                {allColumns.map((column) => (
                  <div key={column.id}>
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
          <div>
            <CSVLink data={data} filename={"my file"}>
              <IconButton aria-label="export to csv">
                <DownloadIcon />
              </IconButton>
            </CSVLink>
          </div>
        </div>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <InfiniteScroll
        dataLength={rows.length}
        next={update}
        hasMore={true}
        loader={<h4>Loading more {fetchRowCount} itens...</h4>}
      >
        <table {...getTableProps()}>
          <thead style={{ backgroundColor: `${headerColor}` }}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                    {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                    />
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
                    onClick: () => onRowClick(row.original),
                  })}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
    </>
  );
}

const StyledTooltip = styled((props) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: #fff;
    color: #000;
  }
  ,
  & .MuiTooltip-arrow {
    color: #fff;
  }
`;

function App() {
  const longText = (
    <MenuList>
      <Typography variant="caption" color="text.secondary">
        Aggregate Values
      </Typography>
      <MenuItem>
        <Typography variant="body2" color="text.secondary">
          Sum = 12
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2" color="text.secondary">
          Average = 12
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2" color="text.secondary">
          Min = 12
        </Typography>
      </MenuItem>
    </MenuList>
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Loan App ID",

        accessor: "loan_app_id",
      },
      {
        Header: "Product",

        accessor: "product",
      },
      {
        Header: "Entity Product",

        accessor: "entity_product",
      },
      {
        Header: "Hub Entity",

        accessor: "hub_entity",
      },
      {
        Header: ({ value }) => (
          <span>
            <span>Source Entity</span>
            <StyledTooltip title={longText} arrow>
              <IconButton sx={{ padding: "0px", marginLeft: "4px" }}>
                <ArrowCircleDownIcon sx={{ color: "white" }} />
              </IconButton>
            </StyledTooltip>
          </span>
        ),

        accessor: "source_entity",
      },
      {
        Header: "Lending Entity",

        accessor: "lending_entity",
      },
      {
        Header: "Primary Appl.",

        accessor: "primary_appl",
      },
      {
        Header: "Status",

        accessor: "status",
      },
      {
        Header: "View",

        Cell: ({ value }) => (
          <div>
            <span>
              <IconButton
                sx={{ padding: "4px" }}
                onClick={(event) => {
                  event.stopPropagation();
                  alert("I am View click Event");
                }}
              >
                <LaunchIcon />
              </IconButton>
            </span>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(10), []);

  return <RTBInfiniteGrid columns={columns} data={data} />;
}

export default App;
