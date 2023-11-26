"use client";

import FormInput from "@/components/Forms/Input";
import {
  AuthRegisterFormFields,
  AuthRegisterSchema,
} from "@/zod/Authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthRegisterFormFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(AuthRegisterSchema),
  });

  const handleRegister = async ({
    email,
    password,
  }: AuthRegisterFormFields) => {
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <FormInput
        register={register("email")}
        label="Email"
        error={errors.email}
        placeholder="your@email.com"
      />
      <FormInput
        register={register("first_name")}
        label="First Name"
        error={errors.first_name}
        placeholder="John"
      />
      <FormInput
        register={register("last_name")}
        label="Last Name"
        error={errors.last_name}
        placeholder="Doe"
      />
      <FormInput
        register={register("password")}
        label="Password"
        error={errors.password}
        type="password"
        placeholder="**********"
      />
      <FormInput
        register={register("confirm_password")}
        label="Confirm Password"
        error={errors.confirm_password}
        type="password"
        placeholder="**********"
      />

      <button
        type="submit"
        className="w-full p-2 rounded mt-4 mb-4 bg-blue-500 text-white hover:bg-blue-600 duration-200"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>

      <div className="flex justify-center content-center">
        <Link
          href="/auth/signin"
          className="text-sm text-slate-400 hover:text-slate-600 duration-200"
        >
          Go back
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
