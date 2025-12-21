import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card as ShadcnCard } from "@/components/ui/card";

import { Event } from "./constants";

interface EventCardProps {
  event: Event;
}

const Card = ({
  event: { title, image, status, slug, date, description, location },
}: EventCardProps) => {
  const statusColors = {
    past: "bg-gradient-to-r from-gray-400 to-gray-500 text-white",
    upcoming: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
    planned: "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
  };

  const statusLabels = {
    past: "Past Event",
    upcoming: "Upcoming",
    planned: "Planned",
  };

  return (
    <ShadcnCard className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white animate-fade-in-up">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <Image
          fill
          alt={title}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          src={image || "/logo.png"}
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-lg ${statusColors[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-sm font-medium text-slate-600">{date}</p>
        <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="h-4 w-4 text-purple-600" />
          <span className="text-sm">{location}</span>
        </div>

        <p className="text-slate-600 leading-relaxed">{description}</p>

        <Link className="block" href={`/events/${slug}`}>
          <button className="w-full cursor-pointer mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            EVENT DETAILS
          </button>
        </Link>
      </div>
    </ShadcnCard>
  );
};

export default Card;
