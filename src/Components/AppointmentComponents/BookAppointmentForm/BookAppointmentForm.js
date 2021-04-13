import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Button, Col, Form } from "react-bootstrap";
import "./BookAppointmentForm.css";
import { useContext } from "react";
import { UserContext } from "../../../App";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

const BookAppointmentForm = ({ modalIsOpen, closeModal, title, date }) => {
	const [user, setUser] = useContext(UserContext);

	const {
		register,
		handleSubmit,
		onChange,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		data.service = title;
		data.date = date.toDateString();
		data.created = new Date();
		fetch(
			"https://shielded-depths-28595.herokuapp.com/addAppointment",
			{
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(data),
			}
		)
			.then((res) => res.json())
			.then((success) => {
				if (success) {
					closeModal();
					alert("Appointment successfully Added");
				}
			});
	};
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 className="text-center special-text">
					{title}
				</h2>
				<p className="text-center">{date.toDateString()}</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="formPart">
						<div className="form-group w-100">
							<Form.Group controlId="Name">
								<Form.Control
									type="Text"
									placeholder="Enter Your Name"
									{...register(
										"firstName",
										{
											required: true,
										}
									)}
								/>
								{errors.firstName && (
									<Form.Text className="text-muted">
										Name is
										required
									</Form.Text>
								)}
							</Form.Group>
							<Form.Group controlId="PhoneNumber">
								<Form.Control
									type="Text"
									placeholder="Enter Your Number"
									{...register(
										"phoneNumber",
										{
											required: true,
										}
									)}
								/>
								{errors.phoneNumber && (
									<Form.Text className="text-muted">
										Number is
										required
									</Form.Text>
								)}
							</Form.Group>
							<Form.Group controlId="email">
								<Form.Control
									type="email"
									placeholder="Enter Your Email"
									value={
										user.email
									}
									{...register(
										"email",
										{
											required: true,
										}
									)}
								/>
								{errors.email && (
									<Form.Text className="text-muted">
										Email is
										required
									</Form.Text>
								)}
							</Form.Group>
							<Form.Row>
								<Form.Group
									as={Col}
									controlId="formGridCity"
								>
									<Form.Control
										type="number"
										placeholder="Your age"
										{...register(
											"age",
											{
												required: true,
											}
										)}
									/>
									{errors.age && (
										<Form.Text className="text-muted">
											Age
											is
											required
										</Form.Text>
									)}
								</Form.Group>

								<Form.Group
									as={Col}
									controlId="formGridState"
								>
									<Form.Control
										as="select"
										{...register(
											"gender",
											{
												required: true,
											}
										)}
										onChange={
											onChange
										}
									>
										<option value="male">
											Male
										</option>
										<option value="female">
											Female
										</option>
									</Form.Control>
									{errors.age && (
										<Form.Text className="text-muted">
											Gender
											is
											required
										</Form.Text>
									)}
								</Form.Group>
							</Form.Row>
						</div>
						<div className="submitButton d-flex  justify-content-end">
							<Button
								type="submit"
								className="special-Btn pl-5 pr-5"
							>
								Send
							</Button>
						</div>
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default BookAppointmentForm;
