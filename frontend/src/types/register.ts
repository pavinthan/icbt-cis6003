import { z } from "zod";

import { UserSchema } from "./user";

export const RegisterSchema = UserSchema.extend({
	password: z.string(),
});

export type Register = z.infer<typeof RegisterSchema>;
