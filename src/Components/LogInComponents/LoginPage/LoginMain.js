import React from "react";
import NavBar from "../../SharedPart/NavBar/NavBar";
import loginPagePhoto from "../../../images/logInpagePic.png";
import "./LoginMain.css";
import RegisterAccountForm from "../LoginForm/RegisterAccount";

const LoginPage = () => {
	return (
		<div>
			<NavBar />
			<div className="row loginPagePart ml-5 mr-5">
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<RegisterAccountForm />
				</div>
				<div className="col-md-6">
					<img src={loginPagePhoto} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
