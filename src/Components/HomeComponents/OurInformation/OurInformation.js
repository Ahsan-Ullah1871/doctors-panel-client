import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
	faClock,
	faMapMarker,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ourInfo = [
	{
		infoTitle: "Opening Hours",
		infoDescription: "We are open 7 days",
		infoIcon: faClock,
		infoBackgroundColor: "primary",
	},
	{
		infoTitle: "Visit Our Location",
		infoDescription: "Rangpur,Sadar,Bangladesh",
		infoIcon: faMapMarker,
		infoBackgroundColor: "dark",
	},
	{
		infoTitle: "Contact Us Now",
		infoDescription: "01872991888",
		infoIcon: faPhone,
		infoBackgroundColor: "primary",
	},
];

const OurInformation = () => {
	return (
		<>
			<section className=" container d-flex justify-content-around">
				<div className="row  mb-5 ">
					{ourInfo.map((info) => (
						<InfoCard info={info} />
					))}
				</div>
			</section>
		</>
	);
};

export default OurInformation;
