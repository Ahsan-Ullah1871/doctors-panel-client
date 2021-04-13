import React from "react";
import { Button } from "react-bootstrap";
import "./ContactPage.css";

const ContactPage = () => {
	return (
		<div className="contactPart">
			<div className="contactSection">
				<h5
					className="text-center mt-3 mb-2"
					style={{ color: "#6ACECE" }}
				>
					CONTACT US
				</h5>
				<h2 className="text-center">
					Always Connect with us{" "}
				</h2>

				<div className="contactForm">
					<input
						type="email"
						name="email"
						placeholder="Enter Your Email Address"
						id=""
					/>
					<input
						type="text"
						name="subject"
						placeholder="*Subject"
						id=""
					/>
					<input
						type="text"
						name="message"
						placeholder="Your Message"
						id="messageBox"
					/>
					<div className="d-flex justify-content-center">
						<Button
							type="submit"
							className="submitBtn"
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
