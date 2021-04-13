import React from "react";
import chairImage from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentMain = ({ handleDateChange }) => {
	return (
		<main>
			<div
				style={{ height: "600px" }}
				className="row align-items-center"
			>
				<div className="col-md-4 offset-md-1">
					<h3>Appointment</h3>
					<Calendar
						onChange={handleDateChange}
						value={new Date()}
					/>
				</div>
				<div className="col-md-6">
					<img
						src={chairImage}
						className="img-fluid"
						alt=""
					/>
				</div>
			</div>
		</main>
	);
};

export default AppointmentMain;
