import { Calendar, MapPin } from "lucide-react";
import React from "react";

import { Event } from "../events";

const Hero = ({ title, date, location, time, description }: Event) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
        {title}
      </h1>

      <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>{date}</span>
          {time && <span>• {time}</span>}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <span>{location}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
