import Link from "next/link";

export default function AuthRegisterVerified({
  searchParams,
}: {
  searchParams?: { token?: string };
}) {
  // todo: Connect with API to confirm the account verification process
  console.log("token", searchParams?.token);

  if (!searchParams?.token)
    return (
      <div>
        <h1 className="text-slate-900 text-center font-bold text-3xl mb-2">
          Missing or invalid account verification token!
        </h1>
        <p className="text-center mb-12">
          Please double check your email and the validity of the provided URL.
        </p>

        <Link
          href="/auth/signin"
          className="w-32 mx-auto block p-2 text-sm text-center text-white bg-blue-400 rounded hover:bg-blue-500 duration-200"
        >
          Sign In
        </Link>
      </div>
    );

  return (
    <div>
      <h1 className="text-center text-3xl font-medium mb-2">
        Registration Completed!
      </h1>
      <p className="text-center mb-12">
        You have successfully verified your account. <br />
      </p>

      <Link
        href="/auth/signin"
        className="block p-2 text-sm text-center text-white bg-blue-400 rounded hover:bg-blue-500 duration-200"
      >
        Sign In Now
      </Link>
    </div>
  );
}
