import type { Metadata } from "next";
import React from "react";

const AlumniLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title: "Alumni | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Connect with Zigbee alumni - successful graduates from OUTR MCA who have made their mark in the tech industry. Learn from their experiences and build your network.",
  keywords:
    "Zigbee alumni, OUTR MCA alumni, tech professionals, software engineers, OUTR graduates, MCA graduates, tech industry, career guidance",
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/alumni",
    title: "Alumni | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Connect with Zigbee alumni - successful graduates from OUTR MCA who have made their mark in the tech industry.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662098/alumni_rfj9oj.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Alumni Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title: "Alumni | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Connect with Zigbee alumni - successful graduates from OUTR MCA who have made their mark in the tech industry.",
    images: {
      url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662098/alumni_rfj9oj.webp",
      width: 1200,
      height: 630,
      alt: "Zigbee Alumni Network",
    },
  },
};

export default AlumniLayout;
