"use client";

import { useMutation, type DefaultError } from "@tanstack/react-query";
import {
	createContext,
	useContext,
	useMemo,
	useCallback,
	useEffect,
} from "react";
import type { PropsWithChildren } from "react";

import { login } from "@/api/login";
import { register } from "@/api/register";
import { addAuthorizationHeader } from "@/config/fetcher";
import type { Auth } from "@/types/auth";
import type { Login } from "@/types/login";
import type { Register } from "@/types/register";

interface AuthActions {
	login: (credentials: Login) => Promise<Auth>;
	register: (credentials: Register) => Promise<Auth>;
	signOut: () => void;
}

const AuthContext = createContext<Auth & AuthActions>(null!);

export function AuthProvider({ children }: Readonly<PropsWithChildren>) {
	const loginMutation = useMutation<Auth, DefaultError, Login>({
		mutationFn: login,
		onSuccess,
	});

	const registerMutation = useMutation<Auth, DefaultError, Register>({
		mutationFn: register,
		onSuccess,
	});

	const signOut = useCallback(() => {
		loginMutation.reset();
		registerMutation.reset();
	}, [loginMutation, registerMutation]);

	const value = useMemo(() => {
		return {
			signOut,
			login: loginMutation.mutateAsync,
			register: registerMutation.mutateAsync,
			user: loginMutation.data?.user ?? registerMutation.data?.user ?? null,
			token: loginMutation.data?.token ?? registerMutation.data?.token ?? null,
		};
	}, [loginMutation, registerMutation, signOut]);

	useEffect(() => {
		addAuthorizationHeader(value.token);
	}, [value.token]);

	useEffect(() => {
		const data = init();
	}, [loginMutation, registerMutation]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
}

function onSuccess(data: Auth) {
	if (data?.token) {
		localStorage.setItem("auth", JSON.stringify(data));
	}
}

function init() {
	const auth = localStorage.getItem("auth");
	if (auth) {
		const data = JSON.parse(auth);
		addAuthorizationHeader(data.token);
		return data;
	}
}
