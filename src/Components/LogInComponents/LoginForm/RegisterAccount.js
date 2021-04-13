import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import {
	CustomLoginMethod,
	initializeFramework,
	oldUserLoginMethod,
} from "../LoginManegment/LoginManegment";
import CreateAccountForm from "./CreateAccountForm";
import "./LoginForm.css";
import SignInForm from "./SignInForm";

const RegisterAccountForm = () => {
	const [user, setUser] = useContext(UserContext);
	const [newUser, setNewUser] = useState(true);

	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	initializeFramework();
	const onSubmit = (data) => {
		newUser
			? CustomLoginMethod(
					data.email,
					data.password,
					data.name
			  ).then((res) => {
					setUser(res);
					history.replace(from);
					if (res.email) {
						sessionStorage.setItem(
							"user",
							res.email
						);
					}
			  })
			: oldUserLoginMethod(data.email, data.password).then(
					(res) => {
						setUser(res);
						history.replace(from);
						if (res.email) {
							sessionStorage.setItem(
								"user",
								res.email
							);
						}
					}
			  );
	};
	return (
		<div>
			<div className="form">
				{newUser ? (
					<CreateAccountForm onSubmit={onSubmit} />
				) : (
					<SignInForm onSubmit={onSubmit} />
				)}
				{user?.error && (
					<p className="text-danger">{user.error}</p>
				)}

				{newUser ? (
					<p className="text-center ">
						Already have an Account?{" "}
						<span
							className="special-text changeFormBtn"
							onClick={() =>
								setNewUser(false)
							}
						>
							Sign In
						</span>
					</p>
				) : (
					<p className="text-center ">
						Don't have an Account?{" "}
						<span
							className="special-text changeFormBtn"
							onClick={() =>
								setNewUser(true)
							}
						>
							Sign Up
						</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default RegisterAccountForm;
