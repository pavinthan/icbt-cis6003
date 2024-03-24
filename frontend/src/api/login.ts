import { fetcher } from "@/config/fetcher";
import type { Auth } from "@/types/auth";
import type { Login } from "@/types/login";

export function login(credentials: Login) {
	return fetcher<Auth>("/login", {
		method: "POST",
		body: credentials,
	});
}
