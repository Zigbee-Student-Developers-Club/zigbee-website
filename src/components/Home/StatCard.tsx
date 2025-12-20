import { LucideIcon } from "lucide-react";
import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  delay: number;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon: Icon,
  delay,
  isVisible,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-purple-600 mb-2" />
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm md:text-base text-slate-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
