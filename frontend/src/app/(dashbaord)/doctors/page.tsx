import { cn } from "@/lib/cn";

const doctors = [
	{
		id: 1,
		createdAt: new Date("2024-04-05T10:00:00"),
		firstName: "Doctor",
		lastName: "A",
		specialization: "Neurology",
		experience: "10 years",
	},
	{
		id: 2,
		createdAt: new Date("2024-04-06T10:00:00"),
		firstName: "Doctor",
		lastName: "B",
		specialization: "Cardiology",
		experience: "8 years",
	},
	{
		id: 3,
		createdAt: new Date("2024-04-07T10:00:00"),
		firstName: "Doctor",
		lastName: "C",
		specialization: "Orthopedics",
		experience: "15 years",
	},
	{
		id: 4,
		createdAt: new Date("2024-04-08T10:00:00"),
		firstName: "Doctor",
		lastName: "D",
		specialization: "Dermatology",
		experience: "5 years",
	},
	{
		id: 5,
		createdAt: new Date("2024-04-09T10:00:00"),
		firstName: "Doctor",
		lastName: "E",
		specialization: "Gastroenterology",
		experience: "12 years",
	},
	{
		id: 6,
		createdAt: new Date("2024-04-10T10:00:00"),
		firstName: "Doctor",
		lastName: "F",
		specialization: "Endocrinology",
		experience: "7 years",
	},
	{
		id: 7,
		createdAt: new Date("2024-04-11T10:00:00"),
		firstName: "Doctor",
		lastName: "G",
		specialization: "Ophthalmology",
		experience: "9 years",
	},
	{
		id: 8,
		createdAt: new Date("2024-04-12T10:00:00"),
		firstName: "Doctor",
		lastName: "H",
		specialization: "Pediatrics",
		experience: "14 years",
	},
	{
		id: 9,
		createdAt: new Date("2024-04-13T10:00:00"),
		firstName: "Doctor",
		lastName: "I",
		specialization: "Psychiatry",
		experience: "11 years",
	},
	{
		id: 10,
		createdAt: new Date("2024-04-14T10:00:00"),
		firstName: "Doctor",
		lastName: "J",
		specialization: "Radiology",
		experience: "6 years",
	},
];

export default function Doctors(): JSX.Element {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-base font-semibold leading-6 text-gray-900">
							Doctors
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							List all the doctors in the hospital and manage their information.
						</p>
					</div>
					<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<button
							type="button"
							className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add a Doctor
						</button>
					</div>
				</div>
				<div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
								>
									ID
								</th>
								<th
									scope="col"
									className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
								>
									Name
								</th>
								<th
									scope="col"
									className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
								>
									Specialization
								</th>
								<th
									scope="col"
									className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Experience
								</th>
								<th
									scope="col"
									className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
								>
									Created At
								</th>
								<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
									<span className="sr-only">Select</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{doctors.map((doctor, doctorIdx) => (
								<tr key={doctor.id}>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-transparent",
											"relative py-4 pl-4 pr-3 text-sm sm:pl-6"
										)}
									>
										<div className="font-medium text-gray-900">{doctor.id}</div>
										{doctorIdx !== 0 ? (
											<div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
										) : null}
									</td>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{doctor.firstName} {doctor.lastName}
									</td>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{doctor.specialization}
									</td>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{doctor.experience}
									</td>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-gray-200",
											"px-3 py-3.5 text-sm text-gray-500"
										)}
									>
										<div className="font-medium">
											{doctor.createdAt.toLocaleString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric",
												hour: "numeric",
												minute: "2-digit",
												hour12: true,
											})}
										</div>
									</td>
									<td
										className={cn(
											doctorIdx === 0 ? "" : "border-t border-transparent",
											"relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
										)}
									>
										<button
											type="button"
											className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
										>
											Select
											<span className="sr-only">, {doctor.specialization}</span>
										</button>
										{doctorIdx !== 0 ? (
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
