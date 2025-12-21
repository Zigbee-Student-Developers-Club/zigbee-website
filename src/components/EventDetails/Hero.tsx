import { Calendar, MapPin } from "lucide-react";
import React from "react";

import { Event } from "../events";

const Hero = ({ title, date, location, time, description }: Event) => {
  return (
    <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
        {title}
      </h1>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <Calendar className="h-5 w-5 text-purple-600" />
          <span className="text-slate-700 font-medium">{date}</span>
          {time && <span className="text-slate-600">• {time}</span>}
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <MapPin className="h-5 w-5 text-purple-600" />
          <span className="text-slate-700 font-medium">{location}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl leading-relaxed text-slate-700 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
