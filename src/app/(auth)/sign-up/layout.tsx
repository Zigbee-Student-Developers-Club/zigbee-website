import type { Metadata } from "next";
import React from "react";

const SignUpLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title: "Sign Up | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Join Zigbee Student Developers' Club! Sign up to become a member and access exclusive events, workshops, and resources.",
  robots: {
    index: false,
    follow: false,
  },
};

export default SignUpLayout;
