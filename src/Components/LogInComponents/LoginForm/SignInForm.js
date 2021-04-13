import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SignInForm = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<div>
			<h4 className="text-center special-text mb-5">Sign In</h4>
			<form action="" onSubmit={handleSubmit(onSubmit)}>
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
						Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
