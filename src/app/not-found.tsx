import { Metadata } from "next";

import { ErrorPage } from "@/components/commons";

const NotFound = () => {
  return (
    <ErrorPage
      description="The page you're looking for is missing."
      statusCode={404}
      title="Page Not Found"
    />
  );
};

export const metadata: Metadata = {
  title:
    "404 Page Not Found | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
};

export default NotFound;
