import type { Metadata } from "next";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "Authentication | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Login or sign up to access Zigbee Student Developers' Club member resources, events, and exclusive content.",
  robots: {
    index: false,
    follow: false,
  },
};

export default AuthLayout;
