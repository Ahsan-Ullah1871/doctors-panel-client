import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCalendarCheck,
	faUser,
	faFileMedical,
	faCog,
	faHome,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useState } from "react";
import { useEffect } from "react";
import {
	initializeFramework,
	logOutMethod,
} from "../../LogInComponents/LoginManegment/LoginManegment";

const Sidebar = () => {
	initializeFramework();

	const [user, setUser] = useContext(UserContext);
	const [isDoctor, setIsDoctor] = useState(false);
	useEffect(() => {
		fetch("https://shielded-depths-28595.herokuapp.com/isDoctor", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: user?.email,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setIsDoctor(data);
			});
	}, [user]);

	const logOutHandle = () => {
		logOutMethod();
		setUser(null);
		sessionStorage.removeItem("user");
	};

	return (
		<div className="sidebar">
			<Link to="/dashBoard">
				<div className="row pt-5   ml-4 align-items-center ">
					<FontAwesomeIcon
						className="mr-2"
						icon={faBars}
					/>
					Dashboard
				</div>
			</Link>
			{isDoctor && (
				<>
					<Link to="/Patients">
						<div className="row mt-4 ml-4 align-items-center">
							<FontAwesomeIcon
								className="mr-2"
								icon={faCalendarCheck}
							/>
							Patients
						</div>
					</Link>
					<Link>
						<div className="row mt-4 ml-4  align-items-center">
							<FontAwesomeIcon
								className="mr-2"
								icon={faUser}
							/>
							Appointment
						</div>
					</Link>
					<Link>
						<div className="row mt-4 ml-4 align-items-center">
							<FontAwesomeIcon
								className="mr-2"
								icon={faFileMedical}
							/>
							Prescriptions
						</div>
					</Link>
					<Link to="/addDoctor">
						<div className="row mt-4 ml-4 align-items-center">
							<FontAwesomeIcon
								className="mr-2"
								icon={faUser}
							/>
							Add Doctor
						</div>
					</Link>
					<Link>
						<div className="row mt-4 ml-4 align-items-center">
							<FontAwesomeIcon
								className="mr-2"
								icon={faCog}
							/>
							Setting
						</div>
					</Link>
				</>
			)}
			<Link to="/home">
				<div className="row mt-4 ml-4 align-items-center">
					<FontAwesomeIcon
						className="mr-2"
						icon={faHome}
					/>
					Home
				</div>
			</Link>
			<Link onClick={logOutHandle}>
				<div className="row mt-4 ml-4 align-items-center">
					<FontAwesomeIcon
						className="mr-2"
						icon={faSignOutAlt}
					/>
					Log Out
				</div>
			</Link>
		</div>
	);
};

export default Sidebar;
