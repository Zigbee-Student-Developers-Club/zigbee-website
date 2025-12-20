import Image from "next/image";
import React from "react";

import { TeamWinner } from "@/components/events/constants";

const RunnersUp = ({ teamName, image, members }: TeamWinner) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          fill
          alt={teamName}
          className="object-cover"
          src={image || "/placeholder.svg"}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            Runners Up
          </span>
        </div>
      </div>
      <div className="p-6 bg-card">
        <h3 className="text-2xl font-bold mb-4">{teamName}</h3>
        <div className="grid grid-cols-2 gap-2">
          {members.map((member, idx) => (
            <p className="text-sm text-muted-foreground" key={idx}>
              {member}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunnersUp;
