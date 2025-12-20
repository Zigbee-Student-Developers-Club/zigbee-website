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
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center w-56 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
      <div className="relative w-24 h-24 mb-4 ring-2 ring-yellow-500/20 rounded-full">
        <Image
          fill
          alt={`${name}'s profile`}
          className="object-cover rounded-full"
          src={imageSrc}
        />
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
      <p className="text-yellow-500 font-semibold text-xs mb-4 tracking-wider">
        BATCH - {batch}
      </p>
      <a
        className="flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-yellow-500 hover:text-black text-gray-300 text-sm py-2.5 px-4 rounded-lg w-full transition-all duration-300 font-medium"
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
