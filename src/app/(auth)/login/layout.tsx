import type { Metadata } from "next";
import React from "react";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title: "Login | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Login to your Zigbee Student Developers' Club account to access exclusive content, events, and member resources.",
  robots: {
    index: false,
    follow: false,
  },
};

export default LoginLayout;
