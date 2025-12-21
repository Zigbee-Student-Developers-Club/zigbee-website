import React from "react";

import { Event } from "@/components/events";

import RunnersUp from "./RunnersUp";
import Winner from "./Winner";

const Team = ({ teamWinners }: Partial<Event>) => {
  return (
    <div className="mb-16">
      <div className="mb-8 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Winners 🏆
        </h2>
      </div>
      <div className="grid md:grid-cols-2 w-full gap-8">
        {/* Winner */}
        {teamWinners?.winner && <Winner {...teamWinners.winner} />}

        {/* Runners Up */}
        {teamWinners?.runnersUp && <RunnersUp {...teamWinners.runnersUp} />}
      </div>
    </div>
  );
};

export default Team;
