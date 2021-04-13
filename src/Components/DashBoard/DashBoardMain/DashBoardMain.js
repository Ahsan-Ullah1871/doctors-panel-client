import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import DashBoardCalender from "../DashboardCalender/DashBoardCalender";
import Sidebar from "../../SharedPart/Sidebar/Sidebar";
import { useContext } from "react";
import { UserContext } from "../../../App";

const DashBoardMain = () => {
	const [user, setUser] = useContext(UserContext);
	const [appointments, setAppointments] = useState([]);

	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDashboardDate = (date) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		fetch(
			"https://shielded-depths-28595.herokuapp.com/appointmentsByDate",
			{
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					date: selectedDate.toDateString(),
					email: user?.email,
				}),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setAppointments(data);
			});
	}, [selectedDate]);

	const DashBoardMainStyle = {
		height: "600px",
		width: "100%",
	};
	return (
		<div className="row " style={DashBoardMainStyle}>
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-5 d-flex align-items-center">
				<DashBoardCalender
					handleDashboardDate={handleDashboardDate}
				/>
			</div>
			<div className="col-md-5">
				<AppointmentsByDate
					appointments={appointments}
					selectedDate={selectedDate}
				/>
			</div>
		</div>
	);
};

export default DashBoardMain;
