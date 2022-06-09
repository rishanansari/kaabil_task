import React from "react";

// -----> css
import "./domainLogo.css";

const DomainLogo = ({ domainLogo }) => {
	return (
		<>
			<img
				id="domainLogo"
				className="domain-logo"
				src={domainLogo}
				alt="logo"
			/>
		</>
	);
};

export default DomainLogo;
