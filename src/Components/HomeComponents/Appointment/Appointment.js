import React from "react";
import "./Appointment.css";
import doctorImage from "../../../images/doctor.png";
import { Button } from "react-bootstrap";

const Appointment = () => {
	return (
		<section className="container-fluid  appointmentPart">
			<div className="container row ">
				<div className="col-md-6 appointmentImage">
					<img src={doctorImage} alt="" />
				</div>
				<div className="col-md-6 text-white mt-5">
					<h6 style={{ color: "#6ACECE" }}>
						APPOINTMENT
					</h6>
					<h2 className="mt-4 mb-4">
						Make an appointment <br /> Today
					</h2>
					<p className="mb-5">
						It is a long established fact that a
						reader will be distractedby the <br />{" "}
						readable content of a page when
						looking at its{" "}
					</p>

					<Button className="info">Learn More</Button>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
