interface TeamMember {
  name: string;
  batch: string;
  imageSrc: string;
  linkedIn: string;
}

interface TeamData {
  label: string;
  members: TeamMember[];
}

const teamData: TeamData[] = [
  {
    label: "Developers",
    members: [
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
      {
        name: "Ashutosh",
        batch: "2027",
        imageSrc: "/logo.png",
        linkedIn: "#",
      },
    ],
  },
  {
    label: "Designers",
    members: [
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
    ],
  },
  {
    label: "Team Magazines",
    members: [
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
    ],
  },
];

export { teamData };
export type { TeamMember as TeamMemberProps };
