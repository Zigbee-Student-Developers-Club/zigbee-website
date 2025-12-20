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

export default Unauthorized;
