import React from "react";

import { PageHeader } from "@/components/commons";
import MagazinesComponent from "@/components/magazines";

const Magazines = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/images/magazines-bg.jpg"
        description="Our annual publication featuring student articles, club achievements, and tech trends."
        title="The Zigbee Chronicles"
      />
      <div className="p-5 md:px-10">
        <MagazinesComponent />
      </div>
    </>
  );
};

export default Magazines;
