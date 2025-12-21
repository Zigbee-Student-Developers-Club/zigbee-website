export type EventStatus = "past" | "upcoming" | "planned";
export type EventType = "workshop" | "event";
export type CompetitionType = "team" | "individual";

export interface Winner {
  name: string;
  year?: string;
  position?: string;
  role?: string;
  image: string;
}

export interface TeamWinner {
  teamName: string;
  members: string[];
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  slug: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  status: EventStatus;
  eventType: EventType;
  competitionType?: CompetitionType;
  winners?: Winner[];
  teamWinners?: {
    winner?: TeamWinner;
    runnersUp?: TeamWinner;
  };
  galleryImages?: string[];
}

export const EVENTS_DATA: Event[] = [
  {
    id: "aptitude-dsa-2025",
    slug: "aptitude-dsa-2025",
    title: "Aptitude + DSA 2025",
    date: "2025",
    location: "MCA Department, OUTR",
    description:
      "Individual coding competition testing aptitude and data structures knowledge.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFo6iXuqZl_QQ/feedshare-shrink_2048_1536/B56ZseNp1gIYAw-/0/1765738455909?e=1767830400&v=beta&t=WTsOzZzb-1-f0hmYeM5IIgdul68bJpNBSCblV2IS86Q",
    status: "past",
    eventType: "workshop",
    competitionType: "individual",
    // winners: [
    //   {
    //     name: "Prabodh Kumar Panda",
    //     position: "1st",
    //     year: "2024",
    //     image:
    //       "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565795/1750871291320_aizgzj.png",
    //   },
    //   {
    //     name: "Abinash Nayak",
    //     position: "2nd",
    //     year: "2024",
    //     image:
    //       "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565704/Screenshot_2025-09-22_at_11.58.08_PM_d7ekb8.png",
    //   },
    //   {
    //     name: "Ananya Swain",
    //     position: "3rd",
    //     year: "2024",
    //     image:
    //       "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565640/1719476592706_xsjps0.jpg",
    //   },
    // ],
    galleryImages: [
      "https://media.licdn.com/dms/image/v2/D5622AQFo6iXuqZl_QQ/feedshare-shrink_2048_1536/B56ZseNp1gIYAw-/0/1765738455909?e=1767830400&v=beta&t=WTsOzZzb-1-f0hmYeM5IIgdul68bJpNBSCblV2IS86Q",
      "https://media.licdn.com/dms/image/v2/D5622AQHKTvsGbQ9FLg/feedshare-shrink_2048_1536/B56ZseNp1mGkAw-/0/1765738456254?e=1767830400&v=beta&t=VaAYKA9yxsCKOmRexY4G-VTG52cDZ8JUZGnMc3FkL1A",
      "https://media.licdn.com/dms/image/v2/D5622AQGyRFkYI34fdg/feedshare-shrink_1280/B56ZseNp1kKEAs-/0/1765738456855?e=1767830400&v=beta&t=c6lCYL8_lKUalzXZEf1bWTYFRMffMVeJ9c4TSkC98mY",
    ],
  },
  {
    id: "mini-hackathon-2025",
    slug: "mini-hackathon-2025",
    title: "Mini Hackathon 2025",
    date: "2025",
    location: "A-302, OUTR",
    description:
      "72-hour coding hackathon where teams built innovative solutions to real-world problems.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHzr_246tuQbg/feedshare-shrink_2048_1536/B56ZsePnEMKQAw-/0/1765738969295?e=1767830400&v=beta&t=kSReZWRvRjbEHZeLhmfnzZbLdzo8FcMm6UTzUb3MGB0",
    status: "past",
    eventType: "workshop",
    competitionType: "team",
    // teamWinners: {
    //   winner: {
    //     teamName: "Team SafeHaven",
    //     members: [
    //       "Prabodh Kumar Panda",
    //       "Rudra Prakash Parida",
    //       "Ashutosh Prusty",
    //       "Jayashree Praharaj",
    //     ],
    //     image:
    //       "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565064/WhatsApp_Image_2025-09-22_at_22.49.26_tgcusb.jpg",
    //   },
    //   runnersUp: {
    //     teamName: "Team Heart2Hand",
    //     members: [
    //       "Manas Kumar Pradhan",
    //       "Udayakara Sahoo",
    //       "Abinash Nayak",
    //       "Monalisa Rout",
    //     ],
    //     image:
    //       "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565064/WhatsApp_Image_2025-09-22_at_22.49.26_1_xd3rlm.jpg",
    //   },
    // },
    galleryImages: [
      "https://media.licdn.com/dms/image/v2/D5622AQGb36pQ224_xQ/feedshare-shrink_2048_1536/B56ZsePnEBJoAw-/0/1765738968686?e=1767830400&v=beta&t=Aby9xTN3pp0JIxsnCuATD5QRw_U_8IzbgskWyGoj7cI",
      "https://media.licdn.com/dms/image/v2/D5622AQHbnCFVf97laQ/feedshare-shrink_2048_1536/B56ZsePnEMG8Aw-/0/1765738969279?e=1767830400&v=beta&t=GE-SsIHB3iXPAZ3B9FRp8aHgwuruHHi-Z9odPtab2_U",
      "https://media.licdn.com/dms/image/v2/D5622AQHzr_246tuQbg/feedshare-shrink_2048_1536/B56ZsePnEMKQAw-/0/1765738969295?e=1767830400&v=beta&t=kSReZWRvRjbEHZeLhmfnzZbLdzo8FcMm6UTzUb3MGB0",
    ],
  },
  {
    id: "aptitude-dsa-2024",
    slug: "aptitude-dsa-2024",
    title: "Aptitude + DSA 2024",
    date: "2024",
    location: "MCA Department, OUTR",
    description:
      "Individual coding competition testing aptitude and data structures knowledge.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151837/WhatsApp_Image_2024-12-25_at_12.32.39_ef6f02a1_kot1n2.jpg",
    status: "past",
    eventType: "workshop",
    competitionType: "individual",
    winners: [
      {
        name: "Prabodh Kumar Panda",
        position: "1st",
        year: "2024",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565795/1750871291320_aizgzj.png",
      },
      {
        name: "Abinash Nayak",
        position: "2nd",
        year: "2024",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565704/Screenshot_2025-09-22_at_11.58.08_PM_d7ekb8.png",
      },
      {
        name: "Ananya Swain",
        position: "3rd",
        year: "2024",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565640/1719476592706_xsjps0.jpg",
      },
    ],
    galleryImages: [
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151837/WhatsApp_Image_2024-12-25_at_12.32.39_ef6f02a1_kot1n2.jpg",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/WhatsApp_Image_2024-12-25_at_12.32.37_ec768427_v3eoso.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151091/WhatsApp_Image_2024-12-25_at_12.54.10_3a35c09d_cnkdtw.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/WhatsApp_Image_2024-12-25_at_12.54.08_4d9caa93_thdbj0.webp",
    ],
  },
  {
    id: "mini-hackathon-2024",
    slug: "mini-hackathon-2024",
    title: "Mini Hackathon 2024",
    date: "2024",
    location: "A-302, OUTR",
    description:
      "72-hour coding hackathon where teams built innovative solutions to real-world problems.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151091/WhatsApp_Image_2024-12-25_at_12.54.10_3a35c09d_cnkdtw.webp",
    status: "past",
    eventType: "workshop",
    competitionType: "team",
    teamWinners: {
      winner: {
        teamName: "Team SafeHaven",
        members: [
          "Prabodh Kumar Panda",
          "Rudra Prakash Parida",
          "Ashutosh Prusty",
          "Jayashree Praharaj",
        ],
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565064/WhatsApp_Image_2025-09-22_at_22.49.26_tgcusb.jpg",
      },
      runnersUp: {
        teamName: "Team Heart2Hand",
        members: [
          "Manas Kumar Pradhan",
          "Udayakara Sahoo",
          "Abinash Nayak",
          "Monalisa Rout",
        ],
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1758565064/WhatsApp_Image_2025-09-22_at_22.49.26_1_xd3rlm.jpg",
      },
    },
    galleryImages: [
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151837/WhatsApp_Image_2024-12-25_at_12.32.39_ef6f02a1_kot1n2.jpg",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/WhatsApp_Image_2024-12-25_at_12.32.37_ec768427_v3eoso.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151091/WhatsApp_Image_2024-12-25_at_12.54.10_3a35c09d_cnkdtw.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/WhatsApp_Image_2024-12-25_at_12.54.08_4d9caa93_thdbj0.webp",
    ],
  },
  {
    id: "aptitude-dsa-2023",
    slug: "aptitude-dsa-2023",
    title: "Aptitude + DSA 2023",
    date: "2023",
    location: "MCA Department, OUTR",
    description:
      "Individual coding competition testing aptitude and data structures knowledge.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/codewars3.a3487541_osrppu.webp",
    status: "past",
    eventType: "workshop",
    competitionType: "individual",
    winners: [
      {
        name: "Babita",
        position: "1st",
        year: "2023",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735222476/WhatsApp_Image_2024-12-26_at_16.10.57_68e20c6e_mxk7kt.webp",
      },
      {
        name: "Pankaj",
        position: "2nd",
        year: "2023",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735222464/IMG_20230912_202435_ctfkfu.webp",
      },
      {
        name: "Satyabrata",
        position: "3rd",
        year: "2023",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735222464/20230117_222217_skfeh0.webp",
      },
    ],
    galleryImages: [
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/codewars3.a3487541_osrppu.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/codewars2.80feba04_m06z65.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143820/MediaAssets/q5zdujirz6c6glstvuag.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735146004/codewars2023-4_fajy3f.webp",
    ],
  },
  {
    id: "web-war-2023",
    slug: "web-war-2023",
    title: "Web War 2023",
    date: "2023",
    location: "MCA Department, OUTR",
    description:
      "Individual web development competition to build the best website in limited time.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143820/MediaAssets/q5zdujirz6c6glstvuag.webp",
    status: "past",
    eventType: "workshop",
    competitionType: "individual",
    winners: [
      {
        name: "Sriram",
        position: "Winner",
        year: "2023",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735222467/IMG_20241226_024625_yfhzco.webp",
      },
      {
        name: "Bhubanesh",
        position: "Runners up",
        year: "2023",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735222465/WhatsApp_Image_2024-09-22_at_20.10.35_e50cdb70_htijqz.webp",
      },
    ],
    galleryImages: [
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/codewars3.a3487541_osrppu.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735151090/codewars2.80feba04_m06z65.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143820/MediaAssets/q5zdujirz6c6glstvuag.webp",
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735146004/codewars2023-4_fajy3f.webp",
    ],
  },
  {
    id: "0CKf6oKEBKeuxicJooVK",
    slug: "cloud-application-development-salesforce-2022",
    title: "Cloud Application with Salesforce Platform",
    date: "NOV 28, 2022",
    location: "A-301, OUTR, Bhubaneswar",
    description:
      "Guest lecture on Cloud Application Development with Salesforce Platform",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143536/salesforce_tmguqd.webp",
    status: "past",
    eventType: "event",
    winners: [
      {
        name: "Debasis Jena",
        year: "2011",
        role: "Tech Lead - Dubai Multi Commodities Center",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143536/salesforce_tmguqd.webp",
      },
    ],
    galleryImages: [],
  },
  {
    id: "2ysEy46NHHJShQoHmO45",
    slug: "alumni-meet-tathya-2024",
    title: "Alumni Meet - Tathya 2024",
    date: "DEC 28, 2024",
    location: "D-402, OUTR, Bhubaneswar",
    description:
      "Annual alumni meet bringing together past students to network and share experiences.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735237706/WhatsApp_Image_2024-12-26_at_16.47.00_830c411a_jbxdsy.jpg",
    status: "past",
    eventType: "event",
    galleryImages: [],
  },
  {
    id: "FPEEHm6eTaPxV9mG5cQu",
    slug: "game-development-unity-3d-2023",
    title: "Game Development with Unity 3D",
    date: "JAN 24, 2023",
    location: "A-301, OUTR, Bhubaneswar",
    description:
      "Workshop on Game Development with Unity 3D by Mallik Ebadat, Game Developer at Amgo Games.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143024/game_development_with_unity_3d_vnmizb.webp",
    status: "past",
    eventType: "event",
    winners: [
      {
        name: "Mallik Ebadat",
        year: "2020",
        role: "Game Developer - Amgo Games",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735143024/game_development_with_unity_3d_vnmizb.webp",
      },
    ],
    galleryImages: [],
  },
  {
    id: "kga6OVX5hGUpMYkpdvRg",
    slug: "alumni-connect-2023",
    title: "Alumni Connect",
    date: "JUL 16, 2023",
    location: "OUTR Auditorium, Bhubaneswar",
    description:
      "Alumni networking event featuring successful graduates from Apple Inc, 8x8, and Amazon sharing their industry experiences.",
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1735141719/alumni-connect_wosgem.png",
    status: "past",
    eventType: "event",
    winners: [
      {
        name: "Supriya Sinha",
        year: "2006",
        role: "Software Engineer - Apple Inc",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735141719/alumni-connect_wosgem.png",
      },
      {
        name: "Tanmay Padhi",
        year: "2006",
        role: "Software Engineer - 8x8",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735141719/alumni-connect_wosgem.png",
      },
      {
        name: "Manas R. Mohanty (B.Tech)",
        year: "2006",
        role: "Software Engineer - Amazon",
        image:
          "https://res.cloudinary.com/dljszrwl0/image/upload/v1735141719/alumni-connect_wosgem.png",
      },
    ],
    galleryImages: [],
  },
];
