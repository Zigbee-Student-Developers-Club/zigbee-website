import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { getInitials } from "@/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { TeamMemberProps } from "./constants";

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  batch,
  linkedIn,
  imageSrc,
}) => {
  return (
    <div className="bg-white border border-purple-200 rounded-xl p-4 flex flex-col items-center text-center w-56 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2">
      {/* Top content */}
      <div className="flex flex-col items-center">
        <Avatar className="h-28 w-28 ring-4 ring-white">
          <AvatarImage alt={name} src={imageSrc} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <h3 className="text-slate-900 font-bold text-lg my-1">{name}</h3>
      </div>

      {/* Push button to bottom */}
      <div className="mt-auto w-full space-y-2">
        <p className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-xs tracking-wider">
          BATCH - {batch}
        </p>
        <a
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm py-2.5 px-4 rounded-lg w-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          href={linkedIn}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
          Connect
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
