import type { Metadata } from "next";
import React from "react";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title: "Profile | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description: "View and manage your Zigbee Student Developers' Club profile.",
  robots: {
    index: false,
    follow: false,
  },
};

export default ProfileLayout;
