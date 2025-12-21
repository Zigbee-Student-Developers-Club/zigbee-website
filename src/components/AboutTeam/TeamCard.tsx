import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { TeamMemberProps } from "./constants";

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  batch,
  imageSrc,
  linkedIn,
}) => {
  return (
    <div className="bg-white border border-purple-200 rounded-xl p-6 flex flex-col items-center text-center w-56 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2">
      <div className="relative w-24 h-24 mb-4 ring-2 ring-purple-300 rounded-full overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-10" />
        <Image
          fill
          alt={`${name}'s profile`}
          className="object-cover rounded-full relative z-10"
          src={imageSrc}
        />
      </div>
      <h3 className="text-slate-900 font-bold text-lg mb-1">{name}</h3>
      <p className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-xs mb-4 tracking-wider">
        BATCH - {batch}
      </p>
      <a
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm py-2.5 px-4 rounded-lg w-full transition-all duration-300 font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
        href={linkedIn}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-base" />
        Connect
      </a>
    </div>
  );
};

export default TeamCard;
