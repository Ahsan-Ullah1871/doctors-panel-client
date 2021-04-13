import React from "react";
import BookAppointmentCard from "../BookAppointmentCard/BookAppointmentCard";
import "./BookAppointment.css";

const availableData = [
	{
		id: 1,
		subject: "Teeth Orthodontics",
		visitingHour: "8:00 AM - 9:00 AM",
		totalSpace: 10,
	},
	{
		id: 2,
		subject: "Cosmetic Dentistry",
		visitingHour: "9:00 AM - 10:00 AM",
		totalSpace: 10,
	},
	{
		id: 3,
		subject: "Teeth Cleaning",
		visitingHour: "10:00 AM - 11:00 AM",
		totalSpace: 10,
	},
	{
		id: 4,
		subject: "Cavity Protection",
		visitingHour: "11:00 AM - 12:00 AM",
		totalSpace: 10,
	},
	{
		id: 5,
		subject: "Teeth Orthodontics",
		visitingHour: "1:00 PM - 2:00 PM",
		totalSpace: 10,
	},
	{
		id: 6,
		subject: "Teeth Orthodontics",
		visitingHour: "5:00 PM - 700 PM",
		totalSpace: 10,
	},
];

const BookAppointment = ({ selectedDate }) => {
	return (
		<div>
			<h2 className="text-center special-text">
				Available Appointments on{" "}
				{selectedDate.toDateString()}
			</h2>
			<div className="mt-5">
				<div className="row m-5 ">
					{availableData.map((booking) => (
						<BookAppointmentCard
							booking={booking}
							date={selectedDate}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default BookAppointment;
