import React from "react";

import { PageHeader } from "@/components/commons";
import MagazinesComponent from "@/components/magazines";

const Magazines = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        description="Our annual publication featuring student articles, club achievements, and tech trends."
        title="The Zigbee Chronicles"
      />
      <div className="p-5 md:px-10">
        <MagazinesComponent />
      </div>
    </main>
  );
};

export default Magazines;
