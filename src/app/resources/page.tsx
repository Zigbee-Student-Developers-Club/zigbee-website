import React from "react";

import { PageHeader } from "@/components/commons";
import ResourcesComponent from "@/components/resources";

const Resources = () => {
  return (
    <>
      <PageHeader
        description="Curated study materials, roadmaps, and tutorials for various technical domains."
        title="Learning Resources"
      />
      <div className="p-5 md:px-10">
        <ResourcesComponent />
      </div>
    </>
  );
};

export default Resources;
