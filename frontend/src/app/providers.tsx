"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { reactQueryClient } from "@/config/react-query-client";
import { AuthProvider } from "@/contexts/auth";

export function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<QueryClientProvider client={reactQueryClient}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	);
}
