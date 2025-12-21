"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { Event } from "@/components/events";

const Individual = ({ winners = [] }: Partial<Event>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="mb-8 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Winners 🏆
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {winners?.map(({ name, image, position, year }, idx) => {
          const positionColors = {
            "1st":
              "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg",
            "2nd":
              "bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-lg",
            "3rd":
              "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg",
          };

          return (
            <div
              className="relative group animate-fade-in-up"
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                className="relative h-64 rounded-full overflow-hidden mb-4 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedImage(image || "/logo.png")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-full" />
                <Image
                  fill
                  alt={name}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 rounded-full"
                  src={image || "/logo.png"}
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${positionColors[position as keyof typeof positionColors]}`}
                  >
                    {position}
                  </span>
                </div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-purple-100">
                <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
                  {name}
                </h3>
                {year && <p className="text-sm text-slate-600">({year})</p>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              fill
              alt="Full size winner image"
              className="object-contain"
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Individual;
