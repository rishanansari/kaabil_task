import React, { useState } from "react";

// -----> images
import settingsIcon from "../../../assets/images/settings.png";
import logoutIcon from "../../../assets/images/logout.png";
import upArrowLogo from "../../../assets/images/upArrow.png";
import downArrowLogo from "../../../assets/images/downArrow.png";
import vector from "../../../assets/images/Vector.png";

// -----> css
import "./userDescription.css";

function UserDescription({
	userProfilePic,
	userData,
	logoutMethod,
	settingsMethod,
}) {
	const [showUserProfile, setShowUserProfile] = useState(false);
	return (
		<div className="user-description">
			<div
				onClick={() => setShowUserProfile(!showUserProfile)}
				style={{ cursor: "pointer" }}
			>
				<img
					src={userProfilePic === "" ? vector : userProfilePic}
					className="profile-pic"
				/>

				<img
					className="down-arrow"
					src={showUserProfile ? upArrowLogo : downArrowLogo}
					alt="downArrowIcon"
				/>
			</div>

			<div
				className="user-profile-block"
				style={{ display: showUserProfile ? "block" : "none" }}
			>
				<div
					className="user-data"
					style={{ margin: userProfilePic === "" ? "20px" : "25px" }}
				>
					<img
						src={userProfilePic === "" ? vector : userProfilePic}
						className="profile-pic-2"
					/>

					<span className="user-details">
						<div className="user-full-name">
							{userData &&
								`${userData.firstName} ${userData.lastName}`}
						</div>
						<div className="user-role">
							{userData && userData.role}
						</div>
					</span>
				</div>
				<div className="user-active-status">
					<div
						className="user-current"
						style={{
							width: userData.lastLogin ? "" : "100%",
							borderRight: userData.lastLogin
								? "1px solid #e9ebef"
								: "none",
						}}
					>
						<div className="user-current-status">Current Login</div>
						<div className="user-current-time">
							{userData &&
								userData.currentLogin &&
								`${userData.currentLogin.time}, ${userData.currentLogin.date}`}
						</div>
					</div>
					<div
						className="user-last"
						style={{
							display: userData.lastLogin ? "block" : "none",
						}}
					>
						<div className="user-last-status">Last Login</div>
						<div className="user-last-time">
							{userData &&
								userData.lastLogin &&
								`${userData.lastLogin.time}, ${userData.lastLogin.date}`}
						</div>
					</div>
				</div>
				<div className="user-settings-block">
					<div
						className="user-settings"
						onClick={() => settingsMethod()}
					>
						<img src={settingsIcon} alt="userSettings" />
						<span>Settings</span>
					</div>
					<div className="user-logout" onClick={() => logoutMethod()}>
						<img src={logoutIcon} alt="userLogout" />
						<span>Logout</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDescription;
