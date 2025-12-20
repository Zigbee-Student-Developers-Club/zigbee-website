import React from "react";

import { ErrorPage } from "@/components/commons";

const Forbidden = () => {
  return (
    <ErrorPage
      description="You don't have permissions to access this page."
      statusCode={403}
      title="Forbidden"
    />
  );
};

export default Forbidden;
