import React from "react";

import { Team, About as AboutComponent } from "@/components/AboutTeam";
import { PageHeader } from "@/components/commons";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        // backgroundImage="/images/events-bg.jpg"
        description="The story behind the club and the people who make it happen."
        title="About Zigbee"
      />
      <div className="px-10 py-8">
        <AboutComponent />
        <Team />
      </div>
    </main>
  );
};

export default About;
