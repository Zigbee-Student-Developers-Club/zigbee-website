"use client";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  InitialValues,
  SignUpTypes,
  ValidationSchema,
} from "@/lib/Schema/signup";
import { SignupUser } from "@/utils/helper";

import TextField from "../Fields/TextField";
import { Button } from "../ui/button";

const SignupFrom = () => {
  const [loading, setLoading] = useState(false);
  const Router = useRouter();
  const handleRegister = async (
    values: SignUpTypes,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);

    toast
      .promise(SignupUser(values), {
        success: "Successfully Signed up",
        loading: "Signning up in process",
      })
      .then(() => {
        resetForm();
        Router.push("/sign-in");
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleRegister}
    >
      <Form className="flex flex-col w-11/12 mx-auto  max-w-md md:w-full space-y-2 border  p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold">
            Join the Zigbee Developer Community !
          </h2>
          <p className="text-sm text-gray-400">Code, Collaborate, Create</p>
        </div>

        <TextField
          label="Full Name"
          name="fullName"
          placeholder="Enter Your Full name"
          type="text"
        />
        <TextField
          label="Email"
          name="email"
          placeholder="xyz@example.com"
          type="email"
        />

        <TextField
          label="Password"
          name="password"
          placeholder="Enter Your Password"
          type="password"
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Enter Again Your Password"
          type="text"
        />
        <TextField
          label="Batch (Pass-Out Year)"
          name="batch"
          placeholder="20XX-XX"
          type="text"
        />

        <Button className="bg-black w-full mt-4 text-white hover:bg-black/60 rounded-md shadow-md px-6 py-2 cursor-pointer">
          {loading ? "Signing UP" : "Sign up"}
        </Button>
      </Form>
    </Formik>
  );
};

export default SignupFrom;
