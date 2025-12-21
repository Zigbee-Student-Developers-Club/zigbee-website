import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

import { VolumeProps } from "./constants";

const Card = ({ title, image, year, volume }: VolumeProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full shadow-lg animate-fade-in-up">
      <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex-shrink-0 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <Image
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          height={400}
          src={image || "/logo.png"}
          width={350}
        />
      </div>
      <div className="p-8 flex flex-col flex-1 bg-white">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-3">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-sm text-slate-600 leading-none">
            {year} • Volume {volume}
          </p>
          <a
            aria-label={`Download ${title}`}
            className="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center border-2 border-purple-300 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg z-10 relative"
            href={image}
            rel="noreferrer"
            target="_blank"
          >
            <Download className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
