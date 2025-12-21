import Image from "next/image";
import React, { useState } from "react";

import { FeatureCardProps } from "./constants";

const Card: React.FC<FeatureCardProps> = ({
  feature: { title, icon: Icon, description, image },
  delay,
  isVisible,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`group relative transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br opacity-80 mix-blend-multiply transition-opacity duration-500 ${isHovered ? "opacity-60" : "opacity-80"}`}
          />
          <Image
            fill
            alt={title}
            className={`w-full h-full object-cover transform transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            src={image || "/logo.png"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Icon Badge */}
          <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <Icon className="w-7 h-7 text-purple-600" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 transform translate-x-12 translate-y-12 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default Card;
