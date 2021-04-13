import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
	return (
		<div>
			<Navbar expand="lg" className="navbarPart">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link className="mr-5" to="/home">
							Home
						</Link>
						<Link
							className="mr-5"
							to="/dashBoard"
						>
							Dashboard
						</Link>
						<Link
							className="mr-5"
							// to="/dentalServices"
						>
							Dental Services
						</Link>
						<Link
							className="mr-5 text-info"
							// to="/reviews"
						>
							Reviews
						</Link>
						<Link
							className="mr-5 text-info"
							// to="/blog"
						>
							Blog
						</Link>
						<Link
							className="mr-5 text-info"
							// to="/contactUs"
						>
							Contact Us
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
