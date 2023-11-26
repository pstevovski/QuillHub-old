"use client";

import FormInput from "@/components/Forms/Input";
import {
  AuthForgotPasswordFormFields,
  AuthForgotPasswordSchema,
} from "@/zod/Authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthForgotPasswordFormFields>({
    defaultValues: { email: "" },
    resolver: zodResolver(AuthForgotPasswordSchema),
  });

  // todo: Connect with API
  const handleForgotPassword = async ({
    email,
  }: AuthForgotPasswordFormFields) => {
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit(handleForgotPassword)}>
      <FormInput
        register={register("email")}
        label="Email"
        error={errors.email}
        placeholder="your@email.com"
      />

      <button
        type="submit"
        className="w-full p-2 rounded mt-4 mb-4 bg-blue-500 text-white hover:bg-blue-600 duration-200"
      >
        {isSubmitting ? "Sending Email..." : "Send Email"}
      </button>

      <Link
        href="/auth/signin"
        className="block text-center text-sm text-slate-400 hover:text-slate-600 duration-200"
      >
        Go back
      </Link>
    </form>
  );
}

export default ForgotPasswordForm;
