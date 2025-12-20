import React from "react";

import { Event } from "@/components/events";

import RunnersUp from "./RunnersUp";
import Winner from "./Winner";

const Team = ({ teamWinners }: Partial<Event>) => {
  return (
    <div className="grid md:grid-cols-2 mb-16 w-full gap-8">
      {/* Winner */}
      {teamWinners?.winner && <Winner {...teamWinners.winner} />}

      {/* Runners Up */}
      {teamWinners?.runnersUp && <RunnersUp {...teamWinners.runnersUp} />}
    </div>
  );
};

export default Team;
