"use client";

import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { useAuth } from "@/contexts/auth";
import { Link } from "@/components/link";

export default function AuthLayout({
	children,
}: PropsWithChildren): JSX.Element {
	const { user } = useAuth();

	if (user) {
		redirect("/");
	}

	return (
		<div className="bg-gray-50 flex h-screen min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Link href="/">
					<img
						className="mx-auto w-8/12"
						src="/appointly.svg"
						alt="Your Company"
					/>
				</Link>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 shadow">
				{children}
			</div>
		</div>
	);
}
