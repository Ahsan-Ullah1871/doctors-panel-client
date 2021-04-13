import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import NavBar from "../../SharedPart/NavBar/NavBar";
import OurInformation from "../OurInformation/OurInformation";
import OurServices from "../OurServices/OurServices";
import "./Header.css";

const Header = () => {
	return (
		<div className="HeaderPart  ">
			<NavBar />
			<HeaderMain />
			<OurInformation />
			<OurServices />
		</div>
	);
};

export default Header;
