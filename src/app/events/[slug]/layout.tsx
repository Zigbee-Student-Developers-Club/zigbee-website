import type { Metadata } from "next";
import React from "react";

import { EVENTS_DATA } from "@/components/events";

const EventDetailsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS_DATA.find(event => event.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found | Zigbee Student Developers' Club",
    };
  }

  return {
    title: `${event.title} | Zigbee Student Developers' Club, OUTR (CETB), Bhubaneswar`,
    description: event.description,
    keywords: `Zigbee, ${event.title}, ${event.eventType}, ${event.location}, OUTR, MCA, ${event.status === "past" ? "past event" : "upcoming event"}`,
    openGraph: {
      type: "website",
      url: `https://zigbeeoutr.in/events/${event.slug}`,
      title: `${event.title} | Zigbee Student Developers' Club`,
      description: event.description,
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@zigbeecetb",
      title: `${event.title} | Zigbee Student Developers' Club`,
      description: event.description,
      images: {
        url: event.image,
        width: 1200,
        height: 630,
        alt: event.title,
      },
    },
  };
}

export default EventDetailsLayout;
