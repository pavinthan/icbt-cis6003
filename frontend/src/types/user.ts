import { z } from "zod";

export const UserSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	phoneNumber: z.string().nullable(),
});

export type User = z.infer<typeof UserSchema>;
