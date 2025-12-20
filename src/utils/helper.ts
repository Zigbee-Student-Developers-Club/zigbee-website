import { SignUpTypes } from "@/lib/Schema/signup";

export async function SignupUser(props: SignUpTypes) {
  const { password, confirmPassword, fullName, batch, email } = props;

  if (password !== confirmPassword) {
    throw new Error("Passwords don't match");
  }
  const user = {
    fullName,
    email,
    password,
    batch,
  };

  return {
    message: "Signup successful! Please check your email for confirmation.",
    user,
  };
}
