import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DashBoardCalender.css";

const DashBoardCalender = ({ handleDashboardDate }) => {
	return (
		<div>
			<h5>Appointments</h5>

			<div className=" ">
				<Calendar
					className="calender"
					onChange={handleDashboardDate}
					value={new Date()}
				/>
			</div>
		</div>
	);
};

export default DashBoardCalender;
