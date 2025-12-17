import TeamCard from "./TeamCard";

const teamData = [
  {
    name: "Manas",
    batch: "2026",
    imageSrc: "/logo.png",
    linkedIn: "https://www.linkedin.com/in/manask-pradhan/",
  },
  {
    name: "Prabodh",
    batch: "2026",
    imageSrc: "/logo.png",
    linkedIn: "https://www.linkedin.com/in/prabodhpanda/",
  },
  {
    name: "Soumya",
    batch: "2026",
    imageSrc: "/logo.png",
    linkedIn: "https://www.linkedin.com/in/srmaharana1999/",
  },
  {
    name: "Sankar",
    batch: "2026",
    imageSrc: "/logo.png",
    linkedIn: "https://www.linkedin.com/in/sankarshan636sahu/",
  },
  { name: "Ashutosh", batch: "2027", imageSrc: "/logo.png", linkedIn: "#" },
];

const MeetTheTeam = () => {
  return (
    <div className="text-center bg-black py-8">
      <h2 className="text-white text-4xl font-bold mb-2">Meet the Team</h2>
      <p className="text-gray-400 mb-12">
        The brilliant minds building our digital presence.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {teamData.map((member, index) => (
          <TeamCard
            batch={member.batch}
            imageSrc={member.imageSrc}
            key={index}
            linkedInUrl={member.linkedIn}
            name={member.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
