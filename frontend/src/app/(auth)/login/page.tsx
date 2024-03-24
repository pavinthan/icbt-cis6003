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

export default function Login(): JSX.Element {
	return (
		<form action="/orders" method="POST">
			<Fieldset>
				<Legend>Sign in to your account</Legend>
				<Text>You must be signed in to book or handle a lab appointment.</Text>
				<FieldGroup className="space-y-3">
					<Field>
						<Label>Email</Label>
						<Input name="email" type="email" placeholder="Enter your email" />
					</Field>
					<Field>
						<Label>Password</Label>
						<Input
							name="password"
							type="password"
							placeholder="Enter your email"
						/>
					</Field>
					<Field className="flex items-center justify-between">
						<p className="text-center text-sm text-gray-500">
							Not a member?{" "}
							<Link
								href="/register"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Create an account
							</Link>
						</p>

						<Button type="button">Login</Button>
					</Field>
				</FieldGroup>
			</Fieldset>
		</form>
	);
}
