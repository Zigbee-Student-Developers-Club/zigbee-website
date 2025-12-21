"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { TeamWinner } from "@/components/events/constants";

const RunnersUp = ({ teamName, image, members }: TeamWinner) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up bg-white">
        <div
          className="relative h-64 cursor-pointer"
          onClick={() => setSelectedImage(image || "/placeholder.svg")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <Image
            fill
            alt={teamName}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            src={image || "/placeholder.svg"}
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Runners Up 🥈
            </span>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-200">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            {teamName}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {members.map((member, idx) => (
              <div
                className="px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-blue-200 hover:border-blue-400 transition-colors shadow-sm hover:shadow-md"
                key={idx}
              >
                <p className="text-sm text-slate-700 font-medium text-center">
                  {member}
                </p>
              </div>
            ))}
          </div>
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
              alt="Full size runners up image"
              className="object-contain"
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RunnersUp;
