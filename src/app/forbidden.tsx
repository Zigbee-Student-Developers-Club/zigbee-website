import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "403 Forbidden | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description: "You don't have permissions to access this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default Forbidden;
