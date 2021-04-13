import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
	return (
		<div className="col-md-3 text-center ml-3 mr-3 mt-5 servicesCard">
			<div className="serviceImage">
				<img src={service.servicePhoto} alt="" />
			</div>
			<div className="serviceName">
				<h4>{service.serviceName}</h4>
			</div>
			<div className="serviceInfo">
				<p>
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Mollitia, dolor!
				</p>
			</div>
		</div>
	);
};

export default ServicesCard;
