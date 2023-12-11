"use client";

import FormInput from "@/components/Forms/Input";
import {
  AuthRegisterFormFields,
  AuthRegisterSchema,
} from "@/zod/Authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthRegisterFormFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(AuthRegisterSchema),
  });

  const handleRegister = async (user: AuthRegisterFormFields) => {
    try {
      // @ts-ignore Testing
      delete user.confirm_password;
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
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
        {isSubmitting ? "Creating Account..." : "Create Account"}
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
