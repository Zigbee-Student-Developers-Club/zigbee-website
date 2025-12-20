import { notFound } from "next/navigation";
import React from "react";

import { Event, Workshop } from "@/components/EventDetails";
import { EVENTS_DATA } from "@/components/events";

const EventDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const event = EVENTS_DATA.find(event => event.slug === slug);

  if (!event) {
    notFound();
  }

  if (event.eventType === "workshop") {
    return <Workshop {...event} />;
  }

  return <Event {...event} />;
};

export default EventDetails;
