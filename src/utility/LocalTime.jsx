import React, { useState, useEffect } from "react";

const IndiaTime = () => {
	const [formattedTime, setFormattedTime] = useState("");

	const calculateIndiaTime = () => {
		const now = new Date();
		const indiaOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
		const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // Convert local time to UTC
		const indiaTime = new Date(utcTime + indiaOffset); // Apply IST offset

		// Format the time in 12-hour format with AM/PM
		let hours = indiaTime.getHours();
		const minutes = indiaTime.getMinutes().toString().padStart(2, "0");
		const ampm = hours >= 12 ? "pm" : "am";
		hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format and handle midnight

		// Format the time as "h:mm a IST, India"
		const timeString = `${hours}:${minutes} ${ampm} IST, India`;

		setFormattedTime(timeString);
	};

	useEffect(() => {
		calculateIndiaTime();
		const interval = setInterval(calculateIndiaTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-darkWhite flex flex-col text-base text-left font-bold leading-snug ">
			<p className="mb-2">Time in India</p>
			<p className="text-darkWhite text-hover">{formattedTime}</p>
		</div>
	);
};

export default IndiaTime;
