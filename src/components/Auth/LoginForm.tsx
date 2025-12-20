"use client";
import { Form, Formik } from "formik";
import { useState } from "react";

import { InitialValues, ValidationSchema } from "@/lib/Schema/login";

import TextField from "../Fields/TextField";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const handleRegister = async () => {
    setLoading(true);

    // handle user login
  };

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleRegister}
    >
      <Form className="flex flex-col w-11/12 mx-auto  max-w-md md:w-full space-y-2 border  p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold">Welcome Back to Zigbee !</h2>
          <p className="text-sm text-gray-400">
            Log in to access events, resources, and your developer network.
          </p>
        </div>

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
        <Button className="bg-black w-full mt-4 text-white hover:bg-black/60 rounded-md shadow-md px-6 py-2 cursor-pointer">
          {loading ? "Logging in" : "Log in"}
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
