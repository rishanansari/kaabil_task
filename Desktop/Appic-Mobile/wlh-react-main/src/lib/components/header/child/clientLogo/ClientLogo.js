import React from "react";

// -----> images

import defaultClientLogo from "../../../assets/images/acme.png";
// -----> css
import "./clientLogo.css";

function ClientLogo({ clientLogo }) {
	return (
		<img
			className="client-logo"
			src={clientLogo.length > 0 ? clientLogo : defaultClientLogo}
			alt="logo"
		/>
	);
}

export default ClientLogo;
