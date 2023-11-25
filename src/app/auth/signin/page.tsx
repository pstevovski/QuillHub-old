import SignInForm from "../components/SignInForm";

export default function AuthSignIn() {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium mb-2">Sign In</h1>
      <p className="text-center mb-12">
        Sign in to access the full set of features this application has to offer
      </p>

      <SignInForm />
    </div>
  );
}
