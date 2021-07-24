import React from "react";

const TimeIconSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			aria-labelledby="title"
			aria-describedby="desc"
			role="img"
			height="100"
			width="100"
		>
			<title>Appointment</title>
			<desc>A line styled icon from Orion Icon Library.</desc>
			<circle
				data-name="layer2"
				cx="32"
				cy="32"
				r="30"
				fill="none"
				stroke="#4955bc"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="4"
				stroke-linejoin="round"
			></circle>
			<path
				data-name="layer2"
				fill="none"
				stroke="#4955bc"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="4"
				d="M32 2v6m0 48v6M2 32h6m48 0h6"
				stroke-linejoin="round"
			></path>
			<path
				data-name="layer1"
				fill="none"
				stroke="#4955bc"
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="4"
				d="M48 20L32 36l-11-9"
				stroke-linejoin="round"
			></path>
		</svg>
	);
};

export default TimeIconSVG;
