import { z } from "zod";

export const AuthSignInSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, "Please enter your password"),
});
export type AuthSignInFormFields = z.infer<typeof AuthSignInSchema>;

export const AuthRegisterSchema = z
  .object({
    email: z
      .string({ required_error: "Please enter your email address" })
      .email({ message: "Please enter a valid email address" }),
    first_name: z
      .string({ required_error: "Please enter your first name" })
      .min(1, "Please enter your first name"),
    last_name: z
      .string({ required_error: "Please enter your last name" })
      .min(1, "Please enter your last name"),
    password: z.string().min(1, "Please enter your password"),
    confirm_password: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match!",
    path: ["confirm_password"],
  });

export type AuthRegisterFormFields = z.infer<typeof AuthRegisterSchema>;
