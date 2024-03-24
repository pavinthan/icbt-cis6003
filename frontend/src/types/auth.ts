import { z } from "zod";

import { UserSchema } from "./user";

export const AuthSchema = z.object({
	user: UserSchema.nullable(),
	token: z.string().nullable(),
});

export type Auth = z.infer<typeof AuthSchema>;
