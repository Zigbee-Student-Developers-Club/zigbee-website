import type { Metadata } from "next";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "Dashboard | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Admin dashboard for Zigbee Student Developers' Club management.",
  robots: {
    index: false,
    follow: false,
  },
};

export default DashboardLayout;
