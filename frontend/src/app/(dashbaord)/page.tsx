import Link from "next/link";

import { cn } from "@/lib/cn";

const appointments = [
	{
		appointmentNumber: 20240405001,
		appointmentAt: new Date("2024-04-05T10:00:00"),
		doctor: "Doctor A",
		patient: "Patient A",
		reason: "Headache and Fever",
		status: "Completed",
	},
	{
		appointmentNumber: 20240405002,
		appointmentAt: new Date("2024-04-05T00:00:00"),
		doctor: "Doctor B",
		patient: "Patient B",
		reason: "Cough and Cold",
		status: "Pending",
	},
	{
		appointmentNumber: 20240405003,
		appointmentAt: new Date("2024-04-06T10:00:00"),
		doctor: "Doctor A",
		patient: "Patient A",
		reason: "Regular Checkup",
		status: "Scheduled",
	},
	{
		appointmentNumber: 20240405004,
		appointmentAt: new Date("2024-04-07T12:00:00"),
		doctor: "Doctor B",
		patient: "Patient B",
		reason: "Flu Symptoms",
		status: "Completed",
	},
	{
		appointmentNumber: 20240405005,
		appointmentAt: new Date("2024-04-08T14:00:00"),
		doctor: "Doctor C",
		patient: "Patient C",
		reason: "Dental Cleaning",
		status: "Scheduled",
	},
	{
		appointmentNumber: 20240405006,
		appointmentAt: new Date("2024-04-09T16:00:00"),
		doctor: "Doctor D",
		patient: "Patient D",
		reason: "Eye Checkup",
		status: "Pending",
	},
	{
		appointmentNumber: 20240405007,
		appointmentAt: new Date("2024-04-10T18:00:00"),
		doctor: "Doctor E",
		patient: "Patient E",
		reason: "Skin Rash",
		status: "Completed",
	},
];

export default function Appointments(): JSX.Element {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-base font-semibold leading-6 text-gray-900">
							Appointments
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							You have booked the following appointments.
						</p>
					</div>
					<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<Link
							href="/appointments/create"
							className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Create an Appointment
						</Link>
					</div>
				</div>
				<div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
								>
									Appointment Number
								</th>
								<th
									scope="col"
									className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
								>
									Appointment Time
								</th>
								<th
									scope="col"
									className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
								>
									Doctor
								</th>
								<th
									scope="col"
									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Reason
								</th>
								<th
									scope="col"
									className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
								>
									Status
								</th>
								<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
									<span className="sr-only">Select</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{appointments.map((appointment, planIdx) => (
								<tr key={appointment.appointmentNumber}>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-transparent",
											"relative py-4 pl-4 pr-3 text-sm sm:pl-6"
										)}
									>
										<div className="font-medium text-gray-900">
											{appointment.appointmentNumber}
										</div>
										{planIdx !== 0 ? (
											<div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
										) : null}
									</td>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{appointment.appointmentAt.toLocaleString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
											hour: "numeric",
											minute: "2-digit",
											hour12: true,
										})}
									</td>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{appointment.doctor}
									</td>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{appointment.reason}
									</td>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-gray-200",
											"px-3 py-3.5 text-sm text-gray-500"
										)}
									>
										<div
											className={cn("font-medium", {
												"text-green-700": appointment.status === "Completed",
												"text-yellow-700": appointment.status === "Pending",
											})}
										>
											{appointment.status}
										</div>
									</td>
									<td
										className={cn(
											planIdx === 0 ? "" : "border-t border-transparent",
											"relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
										)}
									>
										<button
											type="button"
											className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
										>
											Select
											<span className="sr-only">
												, {appointment.appointmentNumber}
											</span>
										</button>
										{planIdx !== 0 ? (
											<div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
										) : null}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}
