import React from "react";

import FeatureCard from "./Card";
import { features, FeaturesSectionProps } from "./constants";

const Features: React.FC<FeaturesSectionProps> = ({ isVisible }) => {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join our vibrant community and access world-class resources
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              delay={idx * 200}
              key={feature.title}
              {...{ feature, isVisible }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
