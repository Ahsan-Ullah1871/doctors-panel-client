import { set } from "date-fns/esm";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import Sidebar from "../../SharedPart/Sidebar/Sidebar";

const AddDoctorMainPart = () => {
	const [doctorInfo, setDoctorInfo] = useState(null);
	const [imageData, setImageData] = useState(null);

	const handleBlur = (e) => {
		const oldInfo = { ...doctorInfo };
		oldInfo[e.target.name] = e.target.value;
		setDoctorInfo(oldInfo);
	};

	const fileUpload = (e) => {
		const newFile = e.target.files[0];
		setImageData(newFile);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("file", imageData);
		formData.append("name", doctorInfo.doctorName);
		formData.append("email", doctorInfo.doctorEmail);

		fetch("https://shielded-depths-28595.herokuapp.com/addDoctor", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const AddDoctorMainPartStyle = {
		height: "600px",
		width: "100%",
	};
	return (
		<div className="row " style={AddDoctorMainPartStyle}>
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10  mt-5  ">
				<Form className="w-75" onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							name="doctorName"
							placeholder="Enter Name"
							onBlur={handleBlur}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							name="doctorEmail"
							placeholder="Enter Your Email"
							onBlur={handleBlur}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.File
							id="formcheck-api-custom"
							custom
						>
							<Form.File.Input
								isValid
								onChange={fileUpload}
							/>
							<Form.File.Label data-browse="Chose Image">
								Upload Image
							</Form.File.Label>
						</Form.File>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default AddDoctorMainPart;
