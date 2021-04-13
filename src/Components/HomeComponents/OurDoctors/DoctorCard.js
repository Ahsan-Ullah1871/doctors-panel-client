import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
	return (
		<div className="col-md-4 doctorCard  w-100">
			<div className="doctorImage">
				<img
					src={`data:image/png;base64,${doctor.image.img}`}
					alt=""
				/>
			</div>
			<div className="doctorInfo mt-3 w-100">
				<h5>{doctor.name}</h5>
				<p>{doctor.email}</p>
			</div>
		</div>
	);
};

export default DoctorCard;
