import type { Metadata } from "next";
import React from "react";

import { ErrorPage } from "@/components/commons";

const Unauthorized = () => {
  return (
    <ErrorPage
      description="Please log in to access this page."
      statusCode={401}
      title="Unauthorized"
      buttonProps={{
        label: "Login",
        href: "/login",
      }}
    />
  );
};

export const metadata: Metadata = {
  title:
    "401 Unauthorized | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description: "Please log in to access this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default Unauthorized;
