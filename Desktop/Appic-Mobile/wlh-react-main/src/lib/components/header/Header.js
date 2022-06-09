import React, { useState } from "react";

// -----> components
import DomainLogo from "./child/domainLogo/DomainLogo";
import ClientLogo from "./child/clientLogo/ClientLogo";
import UserDescription from "./child/userDescription/UserDescription";

// -----> optional components
import Button from "./child/button/Button";

// -----> images
import notificationLogo from "../assets/images/notification.png";
import infoLogo from "../assets/images/infoLogo.png";
import downArrowLogo from "../assets/images/downArrow.png";
import upArrowLogo from "../assets/images/upArrow.png";

import "./header.css";

function Header({
	domainLogo,
	clientLogo,
	portalAdjacent1,
	portalAdjacent2,
	userData,
	logoutMethod,
	settingsMethod,
	userProfilePic,
	optional,
}) {
	const [showSortStatus, setShowSortStatus] = useState(false);

	const [switchRole, setSwitchRole] = useState(
		optional &&
			optional.components &&
			optional.components.filter((data) => data.type === "dropDown") &&
			optional.components.filter((data) => data.type === "dropDown")[0] &&
			optional.components.filter((data) => data.type === "dropDown")[0][
				"options"
			][0]
	);
	return (
		<div data-testid="header-component" className="header-block">
			<div className="header-left-block">
				<div className="header-left-elements">
					<div data-testid="domain-logo-component">
						<DomainLogo domainLogo={domainLogo} />
					</div>
					<div
						className="vertical-line"
						style={{
							borderLeft: "1px solid #C0C0C0",
							height: "2.4vw",
						}}
					></div>
					<div className="portal-adjacent">
						<div className="portal-adjacent-1">
							{portalAdjacent1 ? portalAdjacent1 : ""}
						</div>
						<div className="portal-adjacent-2">
							{portalAdjacent2 ? portalAdjacent2 : ""}
						</div>
					</div>
				</div>
			</div>
			<div className="header-right-block">
				<ul className="header-right-elements">
					{optional && optional.components
						? optional.components.map((data, i) => {
								if (data.type === "button") {
									return (
										<li
											key={i}
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<Button data={data} />
											<div className="vertical-line"></div>
										</li>
									);
								}
								if (data.type === "label") {
									return (
										<li
											key={i}
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<span className="label-block">
												{data.value}
											</span>
											<div
												style={{
													display:
														data.type === "button"
															? "block"
															: data.type !==
															  "dropDown"
															? "block"
															: "none",
												}}
												className="vertical-line"
											></div>
										</li>
									);
								}
								if (data.type === "dropDown") {
									return (
										<li
											key={i}
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<div>
												<div
													className="switchRole"
													style={{
														display: data.options
															.length
															? "block"
															: "none",
													}}
												>
													<div
														className="selectForRole"
														onClick={() =>
															setShowSortStatus(
																!showSortStatus
															)
														}
													>
														<div className="roleViewer">
															<span className="roleView">
																{switchRole}
															</span>
															<img
																className="rolesDropDown"
																src={
																	showSortStatus
																		? upArrowLogo
																		: downArrowLogo
																}
																alt="downArrow"
															/>
														</div>
														<ul
															style={{
																display:
																	showSortStatus
																		? "block"
																		: "none",
															}}
															className="roleDropDownUl"
															onMouseLeave={() => {
																setShowSortStatus(
																	false
																);
															}}
														>
															{data.options
																.length &&
																data.options.map(
																	(role) => {
																		return (
																			<li
																				key={
																					role
																				}
																				onClick={() => {
																					setSwitchRole(
																						role
																					);

																					data.method(
																						role
																					);
																				}}
																				className="roleDropDownLi"
																			>
																				{
																					role
																				}
																			</li>
																		);
																	}
																)}
														</ul>
													</div>
												</div>
											</div>
											<div
												style={{
													display:
														data.type === "label"
															? "block"
															: data.type !==
															  "label"
															? "block"
															: "none",
												}}
												className="vertical-line"
											></div>
										</li>
									);
								}
						  })
						: null}
					<li
						className="info-logo"
						style={{
							display:
								optional && optional.info ? "block" : "none",
						}}
					>
						<img src={infoLogo} alt="info" />
					</li>
					<div
						style={{
							display:
								optional && optional.info ? "block" : "none",
						}}
						className="vertical-line"
					></div>
					<li
						className="notification-logo"
						style={{
							display:
								optional && optional.notification
									? "block"
									: "none",
						}}
					>
						<img src={notificationLogo} alt="Notification" />
					</li>
					<div
						style={{
							display:
								optional && optional.notification
									? "block"
									: "none",
						}}
						className="vertical-line"
					></div>
					<li
						className="user-description-component"
						style={{ display: userData ? "block" : "none" }}
					>
						<UserDescription
							userProfilePic={userProfilePic}
							userData={userData}
							logoutMethod={logoutMethod}
							settingsMethod={settingsMethod}
						/>
					</li>
					<div
						style={{ display: userData ? "block" : "none" }}
						className="vertical-line"
					></div>
					<li data-testid="client-logo-component">
						<ClientLogo clientLogo={clientLogo} />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
