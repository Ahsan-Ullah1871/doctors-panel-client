import React from "react";
import "./Testimonial.css";
import commaImage from "../../../images/commaBg.png";
import WinsonImage from "../../../images/patient1.png";
import RishonImage from "../../../images/patient2.png";
import JishonnImage from "../../../images/patient3.png";
import TestimonialCard from "../TestimonialCard/TestimornialCard";

const testimonialData = [
	{
		PatientsName: "Winson Herry",
		patientPhoto: WinsonImage,
		patientCity: "California",
	},
	{
		PatientsName: "Rishon Herry",
		patientPhoto: RishonImage,
		patientCity: "California",
	},
	{
		PatientsName: "Jishon Herry",
		patientPhoto: JishonnImage,
		patientCity: "California",
	},
];

const Testimonial = () => {
	return (
		<div className="mt-5 pt-5 mb-5 pb-5">
			<div className="row testimonialHeader mr-5 ml-5">
				<div className="col-6">
					<h5 style={{ color: "#6ACECE" }}>
						TESTIMONIAL
					</h5>
					<h2 className="mt-4">
						What’s Our Patients <br /> Says
					</h2>
				</div>
				<div className="col-6 d-flex justify-content-end">
					<img
						style={{ width: "200px" }}
						src={commaImage}
						alt=""
					/>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="row   mr-5 ml-5 mt-5 ">
					{testimonialData.map((testimonial) => (
						<TestimonialCard
							testimonial={testimonial}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
