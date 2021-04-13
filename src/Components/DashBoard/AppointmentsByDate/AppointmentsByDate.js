import React from "react";
import "./AppointmentByDate.css";

const AppointmentsByDate = ({ appointments, selectedDate }) => {
	return (
		<div>
			<div className="appointmentsByDate mt-5">
				<div className="headerText d-flex  ">
					<h4 className="special-text">
						Appointments
					</h4>
					<h5 className="ml-auto">
						{selectedDate.toDateString()}
					</h5>
				</div>

				<div className="appointmentsTable">
					{appointments.length > 0 && (
						<tr>
							<th> Name</th>
							<th>Phone Number</th>
							<th>Email</th>
						</tr>
					)}
					{appointments.length ? (
						appointments.map((appointment) => {
							return (
								<tr>
									<td>
										{
											appointment.firstName
										}
									</td>
									<td>
										{
											appointment.phoneNumber
										}
									</td>
									<td>
										{
											appointment.email
										}
									</td>
								</tr>
							);
						})
					) : (
						<p>Any Appointment is not Found</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default AppointmentsByDate;
