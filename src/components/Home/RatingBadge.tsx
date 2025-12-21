import { Eye, Star } from "lucide-react";
import React from "react";

interface RatingBadgeProps {
  rating: number;
  reviewCount: number;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 w-fit">
      <Eye className="w-5 h-5 text-purple-600" />
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {rating}
        </span>
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" />
      </div>
      <span className="text-sm text-slate-600">
        Based on {reviewCount}+ reviews
      </span>
    </div>
  );
};

export default RatingBadge;
