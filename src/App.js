import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomeComponents/Home/Home";
import AppointmentHome from "./Components/AppointmentComponents/AppointmentHome/AppointmentHome";
import LoginPage from "./Components/LogInComponents/LoginPage/LoginMain";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DashBoardMain from "./Components/DashBoard/DashBoardMain/DashBoardMain";
import PatientsMainPart from "./Components/Patients/PatientsMainPart/PatientsMainPart";
import AddDoctorMainPart from "./Components/AdminPart/AddDoctor/AddDoctorMainPart";

export const UserContext = createContext();

function App() {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={[user, setUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<PrivateRoute path="/appointment">
						<AppointmentHome />
					</PrivateRoute>
					<PrivateRoute path="/dashBoard">
						<DashBoardMain />
					</PrivateRoute>
					<PrivateRoute path="/dashBoard/dashBoardMainPart">
						<DashBoardMain />
					</PrivateRoute>
					<PrivateRoute path="/Patients">
						<PatientsMainPart />
					</PrivateRoute>
					<PrivateRoute path="/addDoctor">
						<AddDoctorMainPart />
					</PrivateRoute>
					<Route exact path="/logIn">
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
