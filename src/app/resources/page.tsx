import React from "react";

import { PageHeader } from "@/components/commons";
import ResourcesComponent from "@/components/resources";

const Resources = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        description="Curated study materials, roadmaps, and tutorials for various technical domains."
        title="Learning Resources"
      />
      <div className="p-5 md:px-10">
        <ResourcesComponent />
      </div>
    </main>
  );
};

export default Resources;
