import ResetPasswordForm from "../components/ResetPasswordForm";

export default function AuthResetPassword({
  searchParams,
}: {
  searchParams?: { token?: string };
}) {
  if (!searchParams?.token)
    return (
      <div>
        <h1 className="text-slate-900 text-center font-bold text-3xl mb-2">
          Missing or invalid password reset token!
        </h1>
        <p className="text-center mb-12">
          Please double check your email and the validity of the provided URL.
        </p>
      </div>
    );

  console.log("TOKEN: ", searchParams?.token);

  return (
    <div>
      <h1 className="text-center text-3xl font-medium mb-2">
        Reset Your Password
      </h1>
      <p className="text-center mb-12">
        Enter your new password that you can then use to sign in into your
        account
      </p>

      <ResetPasswordForm token={searchParams?.token} />
    </div>
  );
}
