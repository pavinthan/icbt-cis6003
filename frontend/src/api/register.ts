import { fetcher } from "@/config/fetcher";
import type { Auth } from "@/types/auth";
import type { Register } from "@/types/register";

export function register(credentials: Register) {
	return fetcher<Auth>("/register", {
		method: "POST",
		body: credentials,
	});
}
