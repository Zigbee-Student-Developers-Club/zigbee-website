import * as Yup from "yup";

export const InitialValues = {
  email: "",
  password: "",
};

export const ValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Password is required"),
});

export type LoginTypes = Yup.InferType<typeof ValidationSchema>;
