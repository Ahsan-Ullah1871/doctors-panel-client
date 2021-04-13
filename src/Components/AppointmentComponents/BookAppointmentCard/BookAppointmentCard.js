import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import BookAppointmentForm from "../BookAppointmentForm/BookAppointmentForm";
import "./BookAppointmentCard.css";

const BookAppointmentCard = ({ booking, date }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="col-md-4">
			<div className="card text-center align-items-center">
				<div className="cardTitle special-text">
					<h5>{booking.subject}</h5>
				</div>
				<div className="time">
					<p>{booking.visitingHour}</p>
				</div>
				<div className="seat mb-4">
					<small>
						{booking.totalSpace} SPACES AVAILABLE
					</small>
				</div>
				<Button onClick={openModal} className="special-Btn">
					Book appointment
				</Button>
				<BookAppointmentForm
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					title={booking.subject}
					date={date}
				/>
			</div>
		</div>
	);
};

export default BookAppointmentCard;
