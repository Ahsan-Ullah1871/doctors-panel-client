import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
	const [user, setUser] = useContext(UserContext);

	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					user?.email ||
					sessionStorage.getItem("user") ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/logIn",
								state: {
									from: location,
								},
							}}
						/>
					)
				}
			/>
		</div>
	);
};

export default PrivateRoute;
