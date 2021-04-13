import React from "react";
import { useState } from "react";
import NavBar from "../../SharedPart/NavBar/NavBar";
import AppointmentMain from "../AppointmentMain/AppointmentMain";
import BookAppointment from "../BookAppointment/BookAppointment";

const AppointmentHome = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<div>
			<NavBar />
			<AppointmentMain handleDateChange={handleDateChange} />
			<BookAppointment selectedDate={selectedDate} />
		</div>
	);
};

export default AppointmentHome;
