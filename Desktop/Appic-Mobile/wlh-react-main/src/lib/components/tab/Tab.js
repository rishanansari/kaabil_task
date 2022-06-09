import React from "react";

// -----> module
import { Grid } from "@mui/material";

// -----> scss
import "./tab.scss";

function Tab({ activeTab, setActiveTab, tabs, buttonLabel, buttonMethod }) {
	return (
		<Grid item className="tab-container">
			<div className="tab-item">
				<div className="tab-left-section">
					<ol className="tab-ul">
						{tabs.map((tab, i) => {
							return (
								<div
									key={i}
									className={`tab-li-block ${
										activeTab === tab ? "active-li-tab" : ""
									}`}
									onClick={() => setActiveTab(tab)}
								>
									<li key={i} className="tab-li">
										{tab}
									</li>
								</div>
							);
						})}
					</ol>
				</div>
				<div
					className="tab-right-section"
					style={{ display: buttonLabel !== "" ? "block" : "none" }}
				>
					<button
						className="tab-button"
						onClick={() => buttonMethod()}
					>
						{buttonLabel}
					</button>
				</div>
			</div>
		</Grid>
	);
}

export default Tab;
