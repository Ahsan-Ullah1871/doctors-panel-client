import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import doctorImage from "../../../images/doctor.png";
import DoctorCard from "./DoctorCard";

const Doctors = [
	{
		doctorName: "Dr Caudi",
		doctorPhoto: doctorImage,
		doctorNumber: "+61 452 200 126",
	},
	{
		doctorName: "Dr Caudi",
		doctorPhoto: doctorImage,
		doctorNumber: "+61 452 200 126",
	},
	{
		doctorName: "Dr Caudi",
		doctorPhoto: doctorImage,
		doctorNumber: "+61 452 200 126",
	},
];

const OurDoctors = () => {
	const [allDoctors, setAllDoctors] = useState(null);
	useEffect(() => {
		fetch("https://shielded-depths-28595.herokuapp.com/doctors")
			.then((res) => res.json())
			.then((data) => {
				setAllDoctors(data);
			});
	}, []);

	return (
		<div className="mt-5 pt-5 w-100">
			<h5 style={{ color: "#6ACECE" }} className="text-center">
				Our Doctors
			</h5>
			<div className="d-flex justify-content-center">
				<div className="row w-100 ">
					{allDoctors?.map((doctor) => (
						<DoctorCard doctor={doctor} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurDoctors;
