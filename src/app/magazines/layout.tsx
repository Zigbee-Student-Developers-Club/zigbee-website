import type { Metadata } from "next";
import React from "react";

const MagazinesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "The Zigbee Chronicles | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Read The Zigbee Chronicles - our annual publication featuring student articles, club achievements, tech trends, and insights from the OUTR MCA community.",
  keywords:
    "Zigbee Chronicles, student magazine, tech articles, OUTR magazine, MCA publication, tech trends, student articles, Zigbee publication",
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/magazines",
    title:
      "Magazines | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Read The Zigbee Chronicles - our annual publication featuring student articles, club achievements, and tech trends.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662101/magazines_dml58p.webp",
        width: 1200,
        height: 630,
        alt: "The Zigbee Chronicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title:
      "The Zigbee Chronicles | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Read The Zigbee Chronicles - our annual publication featuring student articles, club achievements, and tech trends.",
    images: {
      url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662101/magazines_dml58p.webp",
      width: 1200,
      height: 630,
      alt: "The Zigbee Chronicles",
    },
  },
};

export default MagazinesLayout;
