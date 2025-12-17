import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  batch: string;
  imageSrc: string;
  linkedInUrl: string;
}

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  batch,
  imageSrc,
  linkedInUrl,
}) => {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center w-56">
      <div className="relative w-24 h-24 mb-4">
        <Image
          fill
          alt={`${name}'s profile`}
          className="object-cover rounded-full"
          src={imageSrc}
        />
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
      <p className="text-yellow-500 font-bold text-xs mb-4">BATCH {batch}</p>
      <a
        className="flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#616060] text-gray-300 text-xs py-2 px-4 rounded w-full"
        href={linkedInUrl}
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-sm" />
        Connect
      </a>
    </div>
  );
};

export default TeamCard;
