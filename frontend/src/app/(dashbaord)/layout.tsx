"use client";

import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { useAuth } from "@/contexts/auth";

export default function DashboardLayout({
	children,
}: PropsWithChildren): JSX.Element {
	const { user } = useAuth();

	if (!user) {
		redirect("/login");
	}

	return <div>{children}</div>;
}
