import {
	Description as HeadlessDescription,
	Field as HeadlessField,
	Fieldset as HeadlessFieldset,
	Label as HeadlessLabel,
	Legend as HeadlessLegend,
	type DescriptionProps as HeadlessDescriptionProps,
	type FieldProps as HeadlessFieldProps,
	type FieldsetProps as HeadlessFieldsetProps,
	type LabelProps as HeadlessLabelProps,
	type LegendProps as HeadlessLegendProps,
} from "@headlessui/react";
import type React from "react";

import { cn } from "@/lib/cn";

export function Fieldset({
	className,
	...props
}: { disabled?: boolean } & HeadlessFieldsetProps) {
	return (
		<HeadlessFieldset
			{...props}
			className={cn(
				className,
				"[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1"
			)}
		/>
	);
}

export function Legend({ ...props }: HeadlessLegendProps) {
	return (
		<HeadlessLegend
			{...props}
			data-slot="legend"
			className={cn(
				props.className,
				"text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
			)}
		/>
	);
}

export function FieldGroup({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			{...props}
			data-slot="control"
			className={cn("space-y-8", className)}
		/>
	);
}

export function Field({ className, ...props }: HeadlessFieldProps) {
	return (
		<HeadlessField
			className={cn(
				"[&>[data-slot=label]+[data-slot=control]]:mt-3",
				"[&>[data-slot=label]+[data-slot=description]]:mt-1",
				"[&>[data-slot=description]+[data-slot=control]]:mt-3",
				"[&>[data-slot=control]+[data-slot=description]]:mt-3",
				"[&>[data-slot=control]+[data-slot=error]]:mt-3",
				"[&>[data-slot=label]]:font-medium",
				className
			)}
			{...props}
		/>
	);
}

export function Label({
	className,
	...props
}: { className?: string } & HeadlessLabelProps) {
	return (
		<HeadlessLabel
			{...props}
			data-slot="label"
			className={cn(
				"select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white",
				className
			)}
		/>
	);
}

export function Description({
	className,
	disabled,
	...props
}: { className?: string; disabled?: boolean } & HeadlessDescriptionProps) {
	return (
		<HeadlessDescription
			{...props}
			data-slot="description"
			className={cn(
				"text-base/6 text-zinc-500 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-zinc-400",
				className
			)}
		/>
	);
}

export function ErrorMessage({
	className,
	disabled,
	...props
}: { className?: string; disabled?: boolean } & HeadlessDescriptionProps) {
	return (
		<HeadlessDescription
			{...props}
			data-slot="error"
			className={cn(
				"text-base/6 text-red-600 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-red-500",
				className
			)}
		/>
	);
}
