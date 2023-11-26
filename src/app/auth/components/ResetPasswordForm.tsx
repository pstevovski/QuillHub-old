"use client";

import FormInput from "@/components/Forms/Input";
import {
  AuthResetPasswordFormFields,
  AuthResetPasswordSchema,
} from "@/zod/Authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function ResetPasswordForm({ token = "" }: { token?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthResetPasswordFormFields>({
    defaultValues: { password: "", confirm_password: "", token },
    resolver: zodResolver(AuthResetPasswordSchema),
  });

  // todo: Connect with API
  const handleResetPassword = async ({
    password,
    confirm_password,
    token,
  }: AuthResetPasswordFormFields) => {
    console.log({ password, confirm_password, token });
  };

  return (
    <form onSubmit={handleSubmit(handleResetPassword)}>
      <FormInput
        register={register("password")}
        label="New Password"
        error={errors.password}
        placeholder="**********"
        type="password"
      />
      <FormInput
        register={register("confirm_password")}
        label="Confirm New Password"
        error={errors.confirm_password}
        placeholder="**********"
        type="password"
      />

      <button
        type="submit"
        className="w-full p-2 rounded mt-4 mb-4 bg-blue-500 text-white hover:bg-blue-600 duration-200"
      >
        {isSubmitting ? "Resetting Password..." : "Reset Password"}
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

export default ResetPasswordForm;
