import Image from "next/image";
import React from "react";

import { Event } from "../events";

const Gallery = ({ galleryImages, title }: Partial<Event>) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">A Glimpse of {title} ✨</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages?.map((img, idx) => (
          <div className="relative h-64 rounded-lg overflow-hidden" key={idx}>
            <Image
              fill
              alt={`${title} gallery image ${idx + 1}`}
              className="object-cover hover:scale-105 transition-transform duration-300"
              src={img || "/logo.png"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
