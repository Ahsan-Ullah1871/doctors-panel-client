import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import chairImage from "../../../images/chair.png";

const HeaderMain = () => {
	return (
		<main>
			<div
				style={{ height: "600px" }}
				className="row align-items-center w-100"
			>
				<div className="col-md-4 offset-md-1">
					<h1>
						Your New Smile <br />
						Starts Here
					</h1>
					<p>
						Lorem Ipsum is simply dummy text of
						the printing and typesetting industry.
						Lorem Ipsum has been the industry’s
						standard dummy text ever since the
					</p>
					<Link to="/appointment">
						<Button variant="info">
							Get appointment
						</Button>
					</Link>
				</div>
				<div className="col-md-6">
					<img
						src={chairImage}
						className="img-fluid"
						alt=""
					/>
				</div>
			</div>
		</main>
	);
};

export default HeaderMain;
