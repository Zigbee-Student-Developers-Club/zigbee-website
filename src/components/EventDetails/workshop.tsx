import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import routes from "@/routes";

import { Event } from "../events";

import { TeamCompetition, IndividualCompetition } from "./Competition";
import Gallery from "./Gallery";
import Hero from "./Hero";

const Workshop = (event: Event) => {
  const { competitionType, teamWinners, winners, galleryImages } = event;

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

      {/* Winners Section */}
      {competitionType === "team" && teamWinners && (
        <TeamCompetition {...event} />
      )}

      {competitionType === "individual" && winners && (
        <IndividualCompetition {...event} />
      )}

      {/* Gallery Section */}
      {galleryImages && galleryImages.length > 0 && <Gallery {...event} />}
    </main>
  );
};

export default Workshop;
