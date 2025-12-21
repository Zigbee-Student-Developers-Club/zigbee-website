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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 container mx-auto p-10 py-12">
      <Link
        className="inline-flex items-center gap-2 text-slate-700 hover:text-purple-700 mb-8 transition-colors font-medium"
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
