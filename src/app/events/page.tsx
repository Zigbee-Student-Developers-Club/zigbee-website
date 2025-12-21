import React from "react";

import { PageHeader } from "@/components/commons";
import { EventCard, EVENTS_DATA } from "@/components/events";

const Events = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        description="From hackathons to hands-on coding sessions, explore what's happening at Zigbee."
        title="Events & Workshops"
      />
      <div className="w-full mx-auto max-w-7xl grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS_DATA.map(event => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </main>
  );
};

export default Events;
