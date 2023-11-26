import RegisterForm from "../components/RegisterForm";

export default function AuthRegister() {
  return (
    <div>
      <h1 className="text-center text-3xl font-medium mb-2">
        Register an Account
      </h1>
      <p className="text-center mb-12">
        Create a new account that you can use to sign in into the application
      </p>

      <RegisterForm />
    </div>
  );
}
