import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import routes from "@/routes";

import { Event as EventProps } from "../events";

import Gallery from "./Gallery";
import Hero from "./Hero";

const Event = (event: EventProps) => {
  return (
    <main className="min-h-screen bg-background container mx-auto p-10 py-12">
      <Link
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        href={routes.events}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Events</span>
      </Link>

      {/* Hero Section */}
      <Hero {...event} />

      {/* Gallery Section */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <Gallery {...event} />
      )}
    </main>
  );
};

export default Event;
