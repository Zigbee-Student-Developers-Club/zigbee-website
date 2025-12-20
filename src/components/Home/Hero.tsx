"use client";

import {
  Users,
  Zap,
  Calendar,
  Award,
  ArrowRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import RatingBadge from "./RatingBadge";
import StatCard from "./StatCard";

interface HeroSectionProps {
  isVisible: boolean;
  scrollY: number;
}

interface StatData {
  value: string;
  label: string;
  icon: LucideIcon;
}

const Hero: React.FC<HeroSectionProps> = ({ isVisible }) => {
  const stats: StatData[] = [
    { value: "+500", label: "Active Members", icon: Users },
    { value: "50+", label: "Yearly Events", icon: Calendar },
    { value: "120+", label: "Alumni Network", icon: Award },
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Badge */}
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-purple-100 mb-8">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <p className="text-sm md:text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Official Technical Club of OUTR
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                The Creative
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Tech Club
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                of OUTR
              </span>
            </h1>

            <RatingBadge rating={4.8} reviewCount={400} />

            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Join Our Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <div
            className={`relative transform transition-all duration-1000 delay-400 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700" />
                <Image
                  fill
                  alt="Tech community collaborating"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2 animate-float">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-800">
                    Innovation Hub
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl -z-10 animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full -z-10 opacity-50 blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <StatCard
                  delay={idx * 100}
                  isVisible={isVisible}
                  key={stat.label}
                  {...stat}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
