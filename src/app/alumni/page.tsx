import React from "react";

import { PageHeader } from "@/components/commons";

const Alumni = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        backgroundImage="/images/alumni-bg.jpg"
        description="Connect with our seniors who are making waves in the industry."
        title="Alumni Network"
      />
    </main>
  );
};

export default Alumni;
