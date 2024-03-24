"use client";

import {
	Field,
	FieldGroup,
	Fieldset,
	Label,
	Legend,
} from "@/components/fieldset";
import { Link } from "@/components/link";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

export default function Register(): JSX.Element {
	return (
		<form action="/orders" method="POST">
			<Fieldset>
				<Legend>Create a new account</Legend>
				<Text>
					You need to register to be able to book or manage lab appointments.
				</Text>
				<FieldGroup className="space-y-3">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
						<Field>
							<Label>First name</Label>
							<Input name="first_name" placeholder="Enter your first name" />
						</Field>
						<Field>
							<Label>Last name</Label>
							<Input name="last_name" placeholder="Enter your last name" />
						</Field>
					</div>
					<Field>
						<Label>Email</Label>
						<Input name="email" type="email" placeholder="Enter your email" />
					</Field>
					<Field>
						<Label>Phone Number</Label>
						<Input
							name="email"
							type="email"
							placeholder="Enter your phone number"
						/>
					</Field>
					<Field>
						<Label>Password</Label>
						<Input
							name="password"
							type="password"
							placeholder="Enter new password"
						/>
					</Field>
					<Field>
						<Label>Confirm Password</Label>
						<Input
							name="password"
							type="password"
							placeholder="Enter new password"
						/>
					</Field>
					<Field className="flex items-center justify-between">
						<p className="text-center text-sm text-gray-500">
							Already registered?{" "}
							<Link
								href="/login"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Sign In
							</Link>
						</p>

						<Button type="button">Register</Button>
					</Field>
				</FieldGroup>
			</Fieldset>
		</form>
	);
}
