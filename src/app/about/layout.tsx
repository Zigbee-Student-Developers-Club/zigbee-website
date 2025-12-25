import type { Metadata } from "next";
import React from "react";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "About Us & Team | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Learn about Zigbee Student Developers' Club - our mission, vision, and the dedicated team of OUTR MCA students driving innovation in software development.",
  keywords:
    "Zigbee about, Zigbee team, OUTR MCA, student developers club, tech community, software development club, OUTR students, MCA department",
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/about",
    title:
      "About Us | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Learn about Zigbee Student Developers' Club - our mission, vision, and the dedicated team of OUTR MCA students driving innovation in software development.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766663668/about_dgewvw.webp",
        width: 1200,
        height: 630,
        alt: "About Zigbee Student Developers' Club",
      },
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662104/team_myj13q.webp",
        width: 1200,
        height: 630,
        alt: "Team Zigbee Student Developers' Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title:
      "About Us | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Learn about Zigbee Student Developers' Club - our mission, vision, and the dedicated team of OUTR MCA students driving innovation in software development.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766663668/about_dgewvw.webp",
        width: 1200,
        height: 630,
        alt: "About Zigbee Student Developers' Club",
      },
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662104/team_myj13q.webp",
        width: 1200,
        height: 630,
        alt: "Team Zigbee Student Developers' Club",
      },
    ],
  },
};

export default AboutLayout;
