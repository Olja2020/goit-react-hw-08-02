import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/registrationForm/RegistrationForm";

export default function RegisterPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}
