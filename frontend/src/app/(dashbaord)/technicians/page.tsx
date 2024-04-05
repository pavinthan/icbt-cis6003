import { cn } from "@/lib/cn";

const technicians = [
	{
		id: 1,
		createdAt: new Date("2024-04-05T10:00:00"),
		firstName: "Technician",
		lastName: "A",
		experience: "10 years",
	},
	{
		id: 2,
		createdAt: new Date("2024-04-06T10:00:00"),
		firstName: "Technician",
		lastName: "B",
		experience: "8 years",
	},
	{
		id: 3,
		createdAt: new Date("2024-04-07T10:00:00"),
		firstName: "Technician",
		lastName: "C",
		experience: "15 years",
	},
	{
		id: 4,
		createdAt: new Date("2024-04-08T10:00:00"),
		firstName: "Technician",
		lastName: "D",
		experience: "5 years",
	},
	{
		id: 5,
		createdAt: new Date("2024-04-09T10:00:00"),
		firstName: "Technician",
		lastName: "E",
		experience: "12 years",
	},
	{
		id: 6,
		createdAt: new Date("2024-04-10T10:00:00"),
		firstName: "Technician",
		lastName: "F",
		experience: "7 years",
	},
	{
		id: 7,
		createdAt: new Date("2024-04-11T10:00:00"),
		firstName: "Technician",
		lastName: "G",
		experience: "9 years",
	},
	{
		id: 8,
		createdAt: new Date("2024-04-12T10:00:00"),
		firstName: "Technician",
		lastName: "H",
		experience: "14 years",
	},
	{
		id: 9,
		createdAt: new Date("2024-04-13T10:00:00"),
		firstName: "Technician",
		lastName: "I",
		experience: "11 years",
	},
	{
		id: 10,
		createdAt: new Date("2024-04-14T10:00:00"),
		firstName: "Technician",
		lastName: "J",
		experience: "6 years",
	},
];

export default function Technicians(): JSX.Element {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-base font-semibold leading-6 text-gray-900">
							Technicians
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							List all the technicians in the hospital and manage their
							information.
						</p>
					</div>
					<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<button
							type="button"
							className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add a Technician
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
							{technicians.map((technician, technicianIdx) => (
								<tr key={technician.id}>
									<td
										className={cn(
											technicianIdx === 0 ? "" : "border-t border-transparent",
											"relative py-4 pl-4 pr-3 text-sm sm:pl-6"
										)}
									>
										<div className="font-medium text-gray-900">
											{technician.id}
										</div>
										{technicianIdx !== 0 ? (
											<div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
										) : null}
									</td>
									<td
										className={cn(
											technicianIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{technician.firstName} {technician.lastName}
									</td>
									<td
										className={cn(
											technicianIdx === 0 ? "" : "border-t border-gray-200",
											"hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										)}
									>
										{technician.experience}
									</td>
									<td
										className={cn(
											technicianIdx === 0 ? "" : "border-t border-gray-200",
											"px-3 py-3.5 text-sm text-gray-500"
										)}
									>
										<div className="font-medium">
											{technician.createdAt.toLocaleString("en-US", {
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
											technicianIdx === 0 ? "" : "border-t border-transparent",
											"relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
										)}
									>
										<button
											type="button"
											className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
										>
											Select
											<span className="sr-only">
												, {technician.specialization}
											</span>
										</button>
										{technicianIdx !== 0 ? (
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
