import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
	return (
		<section>
			<div
				className={`d-flex align-items-center justify-content-center info-${info.infoBackgroundColor} text-white ml-3 `}
			>
				<div className=" mr-3">
					<FontAwesomeIcon
						className="infoIcon"
						icon={info.infoIcon}
					/>
				</div>
				<div className=" ">
					<h6>{info.infoTitle}</h6>
					<small>{info.infoDescription}</small>
				</div>
			</div>
		</section>
	);
};

export default InfoCard;
