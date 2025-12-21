"use client";
import { X, Award, Trophy, Medal } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { Event } from "@/components/events";

const Individual = ({ winners = [] }: Partial<Event>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const positionConfig = {
    "1st": {
      gradient: "from-yellow-400 via-yellow-500 to-orange-500",
      ring: "ring-yellow-400/50",
      shadow: "shadow-yellow-500/50",
      icon: Trophy,
      iconColor: "text-yellow-500",
      order: "md:order-2",
    },
    "2nd": {
      gradient: "from-slate-300 via-slate-400 to-slate-500",
      ring: "ring-slate-400/50",
      shadow: "shadow-slate-500/50",
      icon: Award,
      iconColor: "text-slate-500",
      order: "md:order-1",
    },
    "3rd": {
      gradient: "from-amber-600 via-amber-700 to-orange-700",
      ring: "ring-amber-600/50",
      shadow: "shadow-amber-600/50",
      icon: Medal,
      iconColor: "text-amber-700",
      order: "md:order-3",
    },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Winners 🏆
          </h2>
        </div>
        <p className="text-slate-600 text-lg">
          Celebrating Excellence and Achievement
        </p>
      </div>

      {/* Winners Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 md:items-end">
          {winners?.map(({ name, image, position, year }, idx) => {
            const config =
              positionConfig[position as keyof typeof positionConfig] ||
              positionConfig["3rd"];
            const Icon = config.icon;

            return (
              <div
                className={`relative group animate-fade-in-up ${config.order} ${position === "1st" ? "md:scale-110" : ""} transition-all duration-500`}
                key={idx}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300">
                  {/* Position Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`relative bg-gradient-to-r ${config.gradient} text-white px-6 py-2 rounded-full shadow-lg ${config.shadow} flex items-center gap-2`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-bold text-lg">{position}</span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative mt-8 mb-6 mx-auto">
                    <div
                      className={`relative h-48 w-48 mx-auto rounded-full overflow-hidden cursor-pointer ring-4 ${config.ring} ${config.shadow} shadow-xl transition-all duration-500 group-hover:ring-8 group-hover:scale-105`}
                      onClick={() => setSelectedImage(image || "/logo.png")}
                    >
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                      />

                      {/* Sparkle Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 animate-pulse" />

                      <Image
                        fill
                        alt={name}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        src={image || "/logo.png"}
                      />
                    </div>

                    {/* Decorative Icon */}
                    <div
                      className={`absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg ${config.ring} ring-4`}
                    >
                      <Icon className={`h-6 w-6 ${config.iconColor}`} />
                    </div>
                  </div>

                  {/* Winner Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-900 bg-clip-text text-transparent">
                      {name}
                    </h3>
                    {year && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                        <span className="text-sm font-semibold text-slate-700">
                          {year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Shine */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 blur-xl" />
                </div>

                {/* Bottom Decoration */}
                <div
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${config.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70 hover:scale-110 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full animate-scale-in">
            <Image
              fill
              alt="Full size winner image"
              className="object-contain drop-shadow-2xl"
              src={selectedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Individual;
