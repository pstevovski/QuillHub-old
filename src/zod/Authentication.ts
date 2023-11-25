import { z } from "zod";

export const AuthSignInSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, "Please enter your password"),
});

export type AuthSignInFormFields = z.infer<typeof AuthSignInSchema>;
