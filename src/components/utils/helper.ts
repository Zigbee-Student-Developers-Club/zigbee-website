import { LoginTypes } from "@/lib/Schema/login";

export async function LoginUser(props: LoginTypes) {
  const { password, email } = props;

  if (!password || !email) {
    throw new Error("Password and emails are required.");
  }
  const user = {
    email,
    password,
  };

  return {
    message: "Signup successful! Please check your email for confirmation.",
    user,
  };
}
