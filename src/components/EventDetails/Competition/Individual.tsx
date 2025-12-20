import Image from "next/image";
import React from "react";

import { Event } from "@/components/events";

const Individual = ({ winners = [] }: Partial<Event>) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {winners?.map(({ name, image, position, year }, idx) => {
        const positionColors = {
          "1st": "bg-yellow-500 text-yellow-950",
          "2nd": "bg-slate-400 text-slate-950",
          "3rd": "bg-amber-600 text-amber-50",
        };

        return (
          <div className="relative" key={idx}>
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image
                fill
                alt={name}
                className="object-cover"
                src={image || "/logo.png"}
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${positionColors[position as keyof typeof positionColors]}`}
                >
                  {position}
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              {year && (
                <p className="text-sm text-muted-foreground">({year})</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Individual;
