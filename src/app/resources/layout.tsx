import type { Metadata } from "next";
import React from "react";

const ResourcesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "Learning Resources | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Access curated study materials, roadmaps, tutorials, and learning resources for various technical domains. Enhance your programming and software development skills.",
  keywords:
    "programming resources, coding tutorials, study materials, tech roadmaps, software development resources, learning materials, programming guides, tech tutorials",
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/resources",
    title:
      "Learning Resources | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Access curated study materials, roadmaps, tutorials, and learning resources for various technical domains.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662102/resources_thvwvn.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Learning Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title:
      "Learning Resources | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Access curated study materials, roadmaps, tutorials, and learning resources for various technical domains.",
    images: {
      url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662102/resources_thvwvn.webp",
      width: 1200,
      height: 630,
      alt: "Zigbee Learning Resources",
    },
  },
};

export default ResourcesLayout;
