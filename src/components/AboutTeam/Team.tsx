import { teamData } from "./constants";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="text-center bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 py-16 px-4 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10" id="team">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Meet the Team
        </h2>
        <p className="text-slate-700 mb-16 font-medium">
          The brilliant minds building our digital presence.
        </p>
        <div className="max-w-7xl mx-auto space-y-16">
          {teamData.map(({ label, members }, index) => (
            <div
              className="animate-fade-in-up"
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                {label}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {members.map((member, idx) => (
                  <TeamCard key={idx} {...member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
