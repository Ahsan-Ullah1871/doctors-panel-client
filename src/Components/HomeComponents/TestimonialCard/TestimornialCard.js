import React from "react";
import { Card } from "react-bootstrap";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div
			className="  ml"
			style={{ margin: "0 15px", width: "350px" }}
		>
			<Card text="dark" className="text-center p-3">
				<blockquote className="blockquote mb-0 card-body">
					<p style={{ fontSize: "19px" }}>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Integer
						posuere erat a ante. Lorem ipsum dolor
						sit amet consectetur adipisicing elit.
						Possimus!
					</p>
					<footer className="  d-flex  align-items-center">
						<div className="patientImage ml-3 mr-3">
							<img
								style={{
									width: "60px",
								}}
								src={
									testimonial.patientPhoto
								}
								alt=""
							/>
						</div>
						<div className="patientInfo">
							<small
								style={{
									color: "#6ACECE",
									fontWeight:
										"bold",
								}}
							>
								{
									testimonial.PatientsName
								}
							</small>
							<br />
							<small>
								{
									testimonial.patientCity
								}
							</small>
						</div>
					</footer>
				</blockquote>
			</Card>
		</div>
	);
};

export default TestimonialCard;
