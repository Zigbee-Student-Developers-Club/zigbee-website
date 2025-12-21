import * as Yup from "yup";

export const InitialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  batch: "",
};

export const ValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  batch: Yup.string().required("Batch is required"),
});

export type SignUpTypes = Yup.InferType<typeof ValidationSchema>;
