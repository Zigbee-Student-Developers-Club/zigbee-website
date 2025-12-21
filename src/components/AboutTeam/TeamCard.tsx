import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { getInitials } from "@/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { TeamMemberProps } from "./constants";

const TeamCard: React.FC<TeamMemberProps> = ({ name, batch, linkedIn }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-xl p-6 flex flex-col items-center text-center w-56 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2">
      <div className="relative">
        <Avatar className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-white transition-all duration-300 group-hover:ring-cyan-400 xs:h-24 xs:w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
          <AvatarImage
            alt={name}
            className="h-full w-full object-cover object-center"
            // src={imageSrc}
          />
          <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 text-base font-bold text-gray-700 xs:text-lg sm:text-xl md:text-2xl">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
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
