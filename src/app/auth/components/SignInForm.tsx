"use client";

import FormInput from "@/components/Forms/Input";
import { AuthSignInFormFields, AuthSignInSchema } from "@/zod/Authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSignInFormFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(AuthSignInSchema),
  });

  const handleSignIn = async ({ email, password }: AuthSignInFormFields) => {
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <FormInput
        register={register("email")}
        label="Email"
        error={errors.email}
        placeholder="your@email.com"
      />
      <FormInput
        register={register("password")}
        label="Password"
        error={errors.password}
        type="password"
        placeholder="**********"
      />
      <button
        type="submit"
        className="w-full p-2 rounded mt-4 mb-4 bg-blue-500 text-white hover:bg-blue-600 duration-200"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>

      <div className="flex justify-between content-center">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-slate-400 hover:text-slate-600 duration-200"
        >
          Forgot Password?
        </Link>
        <Link
          href="/auth/register"
          className="text-sm text-slate-400 hover:text-slate-600 duration-200"
        >
          No account yet?
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;