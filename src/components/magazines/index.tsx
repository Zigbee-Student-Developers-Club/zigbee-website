import React from "react";

import Card from "./card";
import { magazineData } from "./constants";

const Magazines = () => {
  return (
    <div className="w-full p-3">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {magazineData.map(volume => (
            <Card key={volume.id} {...volume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
