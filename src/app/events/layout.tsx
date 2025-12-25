import type { Metadata } from "next";
import React from "react";

const EventsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export const metadata: Metadata = {
  title:
    "Events & Workshops | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
  description:
    "Explore upcoming and past events at Zigbee - hackathons, coding competitions, workshops, and tech sessions. Join us for hands-on learning and innovation.",
  keywords:
    "Zigbee events, hackathon, coding competition, tech workshop, OUTR events, MCA events, programming competition, tech meetup, software development workshop",
  openGraph: {
    type: "website",
    url: "https://zigbeeoutr.in/events",
    title:
      "Events & Workshops | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Explore upcoming and past events at Zigbee - hackathons, coding competitions, workshops, and tech sessions.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662100/events_gz9ins.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Events & Workshops",
      },
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662099/events-2_j7lw5h.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Events & Workshops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zigbeecetb",
    title:
      "Events & Workshops | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar",
    description:
      "Explore upcoming and past events at Zigbee - hackathons, coding competitions, workshops, and tech sessions.",
    images: [
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662100/events_gz9ins.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Events & Workshops",
      },
      {
        url: "https://res.cloudinary.com/dljszrwl0/image/upload/v1766662099/events-2_j7lw5h.webp",
        width: 1200,
        height: 630,
        alt: "Zigbee Events & Workshops",
      },
    ],
  },
};

export default EventsLayout;
