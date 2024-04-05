import { PhotoIcon } from "@heroicons/react/24/solid";

export default function CreateAppointment(): JSX.Element {
	return (
		<main>
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<form>
					<div className="space-y-12">
						<div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
							<div>
								<h2 className="text-base font-semibold leading-7 text-gray-900">
									Create an Appointment
								</h2>
								<p className="mt-1 text-sm leading-6 text-gray-600">
									Schedule a new appointment as a patient.
								</p>
							</div>

							<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
								<div className="col-span-full">
									<label
										htmlFor="doctor"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Doctor
									</label>
									<div className="mt-2">
										<select
											id="doctor"
											name="doctor"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										>
											<option>Doctor A</option>
											<option>Doctor B</option>
											<option>Doctor C</option>
										</select>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="date"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Appointment date
									</label>
									<div className="mt-2">
										<input
											type="date"
											name="date"
											id="date"
											autoComplete="date"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="time"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Appointment time
									</label>
									<div className="mt-2">
										<input
											type="time"
											name="time"
											id="time"
											autoComplete="time"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="col-span-full">
									<label
										htmlFor="about"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Reason
									</label>
									<div className="mt-2">
										<textarea
											id="about"
											name="about"
											rows={3}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
									<p className="mt-3 text-sm leading-6 text-gray-600">
										Write a few sentences about the reason for the appointment.
									</p>
								</div>

								<div className="col-span-full">
									<label
										htmlFor="cover-photo"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Attachments
									</label>
									<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
										<div className="text-center">
											<PhotoIcon
												className="mx-auto h-12 w-12 text-gray-300"
												aria-hidden="true"
											/>
											<div className="mt-4 flex text-sm leading-6 text-gray-600">
												<label
													htmlFor="file-upload"
													className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
												>
													<span>Upload a file</span>
													<input
														id="file-upload"
														name="file-upload"
														type="file"
														className="sr-only"
													/>
												</label>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs leading-5 text-gray-600">
												PNG, JPG, GIF up to 10MB
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
