import React from "react";
import Appointment from "../Appointment/Appointment";
import ContactPage from "../ContactPage/CotactPage";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import OurBlog from "../OurBlog/OurBlog";
import OurDoctors from "../OurDoctors/OurDoctors";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div className="">
			<Header />
			<Feature />
			<Appointment />
			<Testimonial />
			<OurBlog />
			<OurDoctors />
			<ContactPage />
		</div>
	);
};

export default Home;
