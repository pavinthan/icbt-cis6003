import { API_BASE_URL } from "@/constants/api";

const defaultHeaders: Record<string, string> = {
	"Content-Type": "application/json",
};

export function addAuthorizationHeader(token: string | null) {
	if (token) {
		defaultHeaders["Authorization"] = `Bearer ${token}`;
	} else {
		delete defaultHeaders["Authorization"];
	}
}

export async function fetcher<T>(
	url: string,
	init: Omit<RequestInit, "body"> & {
		body?: Record<string, unknown>;
	}
): Promise<T> {
	const response = await fetch(API_BASE_URL + url, {
		...init,
		headers: { ...defaultHeaders, ...init.headers },
		body: init.body ? JSON.stringify(init.body) : undefined,
	});

	if (!response.ok) {
		throw new Error("An error occurred while fetching the data.");
	}

	return response.json();
}
