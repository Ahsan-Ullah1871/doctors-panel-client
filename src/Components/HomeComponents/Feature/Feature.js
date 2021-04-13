import React from "react";
import { Button } from "react-bootstrap";
import featureImage from "../../../images/feature.png";
import "./Feature.css";

const Feature = () => {
	return (
		<div className="row align-items-center mt-5 pt-5 mb-5 w-100">
			<div className="col-md-4 offset-md-1 featureImage ">
				<img src={featureImage} alt="" />
			</div>
			<div className="col-md-5 featureHeader">
				<h2>
					Exceptional Dental <br />
					Care, on Your Terms
				</h2>
				<p className="mt-5 mb-5 w-75">
					It is a long established fact that a reader
					will be distracted by the readable content of
					a page when looking at its layout. The point
					of using Lorem Ipsumis that it has a
					more-or-less normal distribution of
					letters,as opposed to using ‘Content here,
					content here’, making it look like readable
					English. Many desktop publishing packages and
					web page Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Dolorum,
					accusantium.
				</p>
				<Button className="mt-4" variant="info">
					Learn More
				</Button>
			</div>
		</div>
	);
};

export default Feature;
