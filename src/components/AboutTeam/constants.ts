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
        name: "Manas Kumar Pradhan",
        batch: "2026",
        imageSrc:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735319724/profiles/736719ad-2e63-40fa-a7d7-0a071a126083.webp",
        linkedIn: "https://www.linkedin.com/in/manask-pradhan/",
      },
      {
        name: "Prabodh Kumar Panda",
        batch: "2026",
        imageSrc:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565795/1750871291320_aizgzj.png",
        linkedIn: "https://www.linkedin.com/in/prabodhpanda/",
      },
      {
        name: "Soumya Ranjan Maharana",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQHQBTXvrsz3lg/profile-displayphoto-scale_400_400/B56ZeIq4MXHEAg-/0/1750344633182?e=1767830400&v=beta&t=R0giXxzy7I_WTs4p3GcbU9fss8m475tMc32MWlECyiU",
        linkedIn: "https://www.linkedin.com/in/srmaharana1999/",
      },
      {
        name: "Sankarshan Sahu",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQGTWlg5NSlYNg/profile-displayphoto-scale_400_400/B56Zs3RKq.G4Ag-/0/1766158820286?e=1767830400&v=beta&t=-RhGMXMUxRRwq0G8FnMktxXmI0DI7itCoxbglHQncUc",
        linkedIn: "https://www.linkedin.com/in/sankarshan636sahu/",
      },
      {
        name: "Asutosh Sahoo",
        batch: "2027",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQEhccvtTk9kVw/profile-displayphoto-shrink_400_400/B56ZaLkwl5HgAg-/0/1746098392744?e=1767830400&v=beta&t=uaLdxV3ICi0fPxtM5qxKY5Rip7QJKIQLmnwBTNeXtzs",
        linkedIn: "https://www.linkedin.com/in/asutoshsahoo/",
      },
    ],
  },
  {
    label: "Designers",
    members: [
      {
        name: "Gitanjali Mohapatra",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQGG098o-eAGng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728426439267?e=1767830400&v=beta&t=v6YN_wsehPwPh3sy4hlGBZ76CUY_R_cksa72NAA-q7I",
        linkedIn: "https://www.linkedin.com/in/gitanjalimohapatra/",
      },
      {
        name: "Rafia Firdous",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D4D03AQESho7ND0Rg-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728990297744?e=1767830400&v=beta&t=U5M4TAX-8wlXwROsmrP1YvX0tNm9SLumcj7_YyoN_Kc",
        linkedIn: "https://www.linkedin.com/in/rafia-firdous05/",
      },
      {
        name: "Prabodh Kumar Panda",
        batch: "2026",
        imageSrc:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565795/1750871291320_aizgzj.png",
        linkedIn: "https://www.linkedin.com/in/prabodhpanda/",
      },
      {
        name: "Manas Kumar Pradhan",
        batch: "2026",
        imageSrc:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735319724/profiles/736719ad-2e63-40fa-a7d7-0a071a126083.webp",
        linkedIn: "https://www.linkedin.com/in/manask-pradhan/",
      },
    ],
  },
  {
    label: "Team Magazines",
    members: [
      {
        name: "Rojaline Sahoo",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQGpZVrRiaZf-w/profile-displayphoto-shrink_400_400/B56ZRJzrkTH0Ag-/0/1736405079933?e=1767830400&v=beta&t=PF1nVR3Jeg4dCQGRPzTEIdm7B3tm967g1nB2FoVdA3U",
        linkedIn: "https://www.linkedin.com/in/rojalinesahoo/",
      },
      {
        name: "Prabodh Kumar Panda",
        batch: "2026",
        imageSrc:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565795/1750871291320_aizgzj.png",
        linkedIn: "https://www.linkedin.com/in/prabodhpanda/",
      },
      {
        name: "Gitanjali Mohapatra",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D5603AQGG098o-eAGng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728426439267?e=1767830400&v=beta&t=v6YN_wsehPwPh3sy4hlGBZ76CUY_R_cksa72NAA-q7I",
        linkedIn: "https://www.linkedin.com/in/gitanjalimohapatra/",
      },
      {
        name: "Rafia Firdous",
        batch: "2026",
        imageSrc:
          "https://media.licdn.com/dms/image/v2/D4D03AQESho7ND0Rg-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728990297744?e=1767830400&v=beta&t=U5M4TAX-8wlXwROsmrP1YvX0tNm9SLumcj7_YyoN_Kc",
        linkedIn: "https://www.linkedin.com/in/rafia-firdous05/",
      },
    ],
  },
];

export { teamData };
export type { TeamMember as TeamMemberProps };
