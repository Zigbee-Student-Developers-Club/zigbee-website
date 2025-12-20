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
    past: "bg-muted text-muted-foreground",
    upcoming: "bg-emerald-500 text-white",
    planned: "bg-violet-500 text-white",
  };

  const statusLabels = {
    past: "Past Event",
    upcoming: "Upcoming",
    planned: "Planned",
  };

  return (
    <ShadcnCard className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-56 overflow-hidden">
        <Image
          fill
          alt={title}
          className="object-cover"
          src={image || "/logo.png"}
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-sm font-medium text-muted-foreground">{date}</p>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <Link className="block" href={`/events/${slug}`}>
          <button className="w-full cursor-pointer mt-4 bg-foreground text-background hover:bg-foreground/90 py-3 rounded-lg font-semibold transition-colors">
            EVENT DETAILS
          </button>
        </Link>
      </div>
    </ShadcnCard>
  );
};

export default Card;
