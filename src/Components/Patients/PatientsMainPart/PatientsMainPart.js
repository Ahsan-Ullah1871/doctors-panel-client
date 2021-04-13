import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppointmentsByDate from "../../DashBoard/AppointmentsByDate/AppointmentsByDate";
import DashBoardCalender from "../../DashBoard/DashboardCalender/DashBoardCalender";
import Sidebar from "../../SharedPart/Sidebar/Sidebar";

const PatientsMainPart = () => {
	const PatientsMainPartStyle = {
		height: "600px",
		width: "100%",
	};
	return (
		<div className="row " style={PatientsMainPartStyle}>
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-5 d-flex align-items-center"></div>
			<div className="col-md-5"></div>
		</div>
	);
};

export default PatientsMainPart;
