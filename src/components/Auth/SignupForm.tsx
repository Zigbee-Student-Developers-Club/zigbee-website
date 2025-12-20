"use client";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";

import { InitialValues, ValidationSchema } from "@/lib/Schema/signup";
import routes from "@/routes";

import TextField from "../Fields/TextField";
import { Button } from "../ui/button";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);

    // handle register
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleRegister}
      >
        <Form className="flex flex-col w-full space-y-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-lg">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Join the Zigbee Developer Community!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Code, Collaborate, Create
            </p>
          </div>

          <div className="space-y-4">
            <TextField
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              type="text"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="oliver@example.com"
              type="email"
            />

            <TextField
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="********"
              type="password"
            />
            <TextField
              label="Batch (Pass-Out Year)"
              name="batch"
              placeholder="2026"
              type="text"
            />
          </div>

          <div className="space-y-4">
            <Button
              className="bg-black w-full text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg shadow-md px-6 py-3 font-semibold transition-all duration-200"
              disabled={loading}
              type="submit"
            >
              {loading ? "Signing up..." : "Sign up"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="text-center">
              <Link
                className="text-sm font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-4 transition-colors"
                href={routes.auth.login}
              >
                Log in to Zigbee
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
