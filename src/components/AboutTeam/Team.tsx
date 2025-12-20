import { teamData } from "./constants";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="text-center bg-black py-16 px-4 rounded-lg">
      <h2 className="text-white text-4xl font-bold mb-2">Meet the Team</h2>
      <p className="text-gray-400 mb-16">
        The brilliant minds building our digital presence.
      </p>
      <div className="max-w-7xl mx-auto space-y-16">
        {teamData.map(({ label, members }, index) => (
          <div key={index}>
            <h3 className="text-white text-2xl font-semibold mb-8">{label}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
