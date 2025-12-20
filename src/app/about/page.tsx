import React from "react";

import { Team, About as AboutComponent } from "@/components/AboutTeam";
import { PageHeader } from "@/components/commons";

const About = () => {
  return (
    <>
      <PageHeader
        // backgroundImage="/images/events-bg.jpg"
        description="The story behind the club and the people who make it happen."
        title="About Zigbee"
      />
      <div className="px-10">
        <AboutComponent />
        <Team />
      </div>
    </>
  );
};

export default About;
