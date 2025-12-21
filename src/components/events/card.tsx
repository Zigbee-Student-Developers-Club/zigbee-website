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
    <Link href={`/events/${slug}`}>
      <ShadcnCard className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-500/50 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            fill
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
            >
              {statusLabels[status]}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white text-sm font-medium">{date}</p>
          </div>
        </div>

        <div className="p-6 space-y-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{location}</span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
            {description}
          </p>

          <button className="w-full cursor-pointer mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            EVENT DETAILS
          </button>
        </div>
      </ShadcnCard>
    </Link>
  );
};

export default Card;
