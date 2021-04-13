import React from "react";
import "./OurServices.css";
import FluorideImage from "../../../images/fuloride.png";
import CavityImage from "../../../images/cavity.png";
import TeethImage from "../../../images/teath.png";
import ServicesCard from "../ServicesCard/ServicesCard";

const OurServices = () => {
	const services = [
		{
			serviceName: "Fluoride Treatment",
			servicePhoto: FluorideImage,
		},
		{
			serviceName: "Cavity Filling",
			servicePhoto: CavityImage,
		},
		{
			serviceName: "Teeth Whitening",
			servicePhoto: TeethImage,
		},
	];
	return (
		<div className="mt-5 w-100">
			<h5 className="text-center" style={{ color: "#1CC7C1" }}>
				OUR SERVICES
			</h5>
			<h1 className="text-center">Services We Provide</h1>

			<div className="row w-100 d-flex justify-content-center mt-5">
				{services.map((service) => (
					<ServicesCard service={service} />
				))}
			</div>
		</div>
	);
};

export default OurServices;
