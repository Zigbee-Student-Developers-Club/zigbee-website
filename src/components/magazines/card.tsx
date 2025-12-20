import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

import { VolumeProps } from "./constants";

const Card = ({ title, image, year, volume }: VolumeProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full shadow">
      <div className="aspect-[3/4] overflow-hidden bg-muted flex-shrink-0">
        <Image
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          height={400}
          src={image || "/logo.png"}
          width={350}
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-sm text-muted-foreground leading-none">
            {year} • Volume {volume}
          </p>
          <a
            aria-label={`Download ${title}`}
            className="cursor-pointer h-8 w-8 p-2 border rounded-full flex items-center justify-center"
            href={image}
            rel="noreferrer"
            target="_blank"
          >
            <Download className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
