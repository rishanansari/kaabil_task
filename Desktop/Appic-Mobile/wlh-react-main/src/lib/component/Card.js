import React from "react";
import TimeStampIcon from "../assets/images/timestamp.svg";
import "../styles/style.css";

function Card(props) {
	// console.log("props", props);
	let BottomBar = props.bottomBar;
	return (
		<div className="card_">
			{props.tag && (
				<span
					className={`card_tag ${props.tag
						.trim()
						.toLowerCase()
						.replace(/([^A-Z0-9]+)(.)/gi, function (match) {
							return `${arguments[2]}`;
						})}`}
				>
					{props.tag}
				</span>
			)}
			<div className="card_top_det">
				<div className="card_name">
					<h5>{props.title}</h5>
					<h6>
						{props.desc1} <span></span> {props.desc2}
					</h6>
				</div>
				<div className="card_date">
					<p>{props.hash}</p>
					<h6>
						<span>
							<img
								src={TimeStampIcon}
								style={{
									width: "14.32px",
									height: "12px",
									position: "relative",
									top: "3px",
								}}
							/>
						</span>
						{props.date}
					</h6>
				</div>
			</div>
			<BottomBar />
		</div>
	);
}

export default Card;
