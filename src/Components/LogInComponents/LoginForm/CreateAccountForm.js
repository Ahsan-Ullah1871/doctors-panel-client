import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateAccountForm = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<div>
			<h4 className="text-center special-text mb-5">Sign Up</h4>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<div className="nameBox">
					<input
						placeholder="Enter Your Name"
						type="text"
						name="name"
						id=""
						{...register("name", {
							required: true,
						})}
					/>
					{errors.name && (
						<p className="text-muted">
							Name is required
						</p>
					)}
				</div>
				<div className="emailBox">
					<input
						placeholder="Enter Your Email"
						type="email"
						name="email"
						id=""
						{...register("email", {
							required: true,
						})}
					/>
					{errors.email && (
						<p className="text-muted">
							Email is required
						</p>
					)}
				</div>
				<div className="passwordBox">
					<input
						placeholder="Enter Your Password"
						type="password"
						name="password"
						id=""
						{...register("password", {
							required: true,
						})}
					/>
					{errors.password && (
						<p className="text-muted">
							Password is required
						</p>
					)}
				</div>
				<div className="nameBox">
					<Button
						className=" w-100 special-Btn"
						type="submit"
					>
						Sign Up
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccountForm;
