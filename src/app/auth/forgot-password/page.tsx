import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function AuthForgotPassword() {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium mb-2">
        Forgot Your Password?
      </h1>
      <p className="text-center mb-12">
        Provide your email in the input field below and we`ll <br /> send you an
        email where you can reset your password.
      </p>

      <ForgotPasswordForm />
    </div>
  );
}
