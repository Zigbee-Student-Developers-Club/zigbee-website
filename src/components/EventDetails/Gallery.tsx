"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { Event } from "../events";

const Gallery = ({ galleryImages, title }: Partial<Event>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          A Glimpse of {title} ✨
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages?.map((img, idx) => (
            <div
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              key={idx}
              onClick={() => setSelectedImage(img || "/logo.png")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                fill
                alt={`${title} gallery image ${idx + 1}`}
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                src={img || "/logo.png"}
              />
            </div>
          ))}
        </div>
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
              alt="Full size gallery image"
              className="object-contain"
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
