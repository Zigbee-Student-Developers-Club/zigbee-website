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
    id: "code-wars-2023",
    slug: "code-wars-2023",
    title: "Code Wars 2023",
    date: "OCT 15-16, 2023",
    location: "Auditorium",
    description:
      "Our flagship 24-hour coding battle. Over 50 teams participated from across the state.",
    image: "/coding-competition-banner-with-code-on-screen.jpg",
    status: "past",
    eventType: "workshop",
    competitionType: "team",
    teamWinners: {
      winner: {
        teamName: "Team SafeHaven",
        members: [
          "Prabodh Kumar Panda",
          "Rudra Prakash Panda",
          "Ashutosh Prusty",
          "Jayashree Praharaj",
        ],
        image: "/team-of-developers-celebrating-with-trophy.jpg",
      },
      runnersUp: {
        teamName: "Team Heart2Hand",
        members: [
          "Manas Kumar Pradhan",
          "Udayakara Sahoo",
          "Abinash Nayak",
          "Monalisa Rout",
        ],
        image: "/coding-team-celebrating-runners-up-position.jpg",
      },
    },
    galleryImages: [
      "/students-coding-in-computer-lab.jpg",
      "/coding-competition-participants-working.jpg",
      "/hackathon-collaboration.png",
      "/programming-contest-at-university.jpg",
      "/students-presenting-coding-project.jpg",
      "/tech-competition-venue-with-screens.jpg",
    ],
  },
  {
    id: "aptitude-dsa-2024",
    slug: "aptitude-dsa-2024",
    title: "Aptitude + DSA 2024",
    date: "MAR 20, 2024",
    location: "Computer Lab 1",
    description:
      "Individual coding competition testing aptitude and data structures knowledge.",
    image: "/data-structures-and-algorithms-competition.jpg",
    status: "past",
    eventType: "workshop",
    competitionType: "individual",
    winners: [
      {
        name: "Prabodh Kumar Panda",
        position: "1st",
        year: "2024",
        image: "/young-male-computer-science-student.jpg",
      },
      {
        name: "Abinash Nayak",
        position: "2nd",
        year: "2024",
        image: "/male-tech-student-with-trophy.jpg",
      },
      {
        name: "Ananya Swain",
        position: "3rd",
        year: "2024",
        image: "/female-computer-science-student-smiling.jpg",
      },
    ],
    galleryImages: [
      "/students-taking-coding-exam.jpg",
      "/computer-lab-aptitude-test.jpg",
      "/programming-competition-focused-students.jpg",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "reactjs-bootcamp",
    slug: "reactjs-bootcamp",
    title: "ReactJS Bootcamp",
    date: "NOV 12, 2023",
    location: "Computer Lab 3",
    description:
      "A beginner friendly workshop to get started with Modern Web Development.",
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    eventType: "event",
    galleryImages: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "cloud-computing-seminar",
    slug: "cloud-computing-seminar",
    title: "Cloud Computing Seminar",
    date: "DEC 05, 2023",
    location: "Seminar Hall 1",
    description:
      "Guest lecture by AWS Solution Architect on the future of cloud.",
    image: "/placeholder.svg?height=400&width=600",
    status: "upcoming",
    eventType: "event",
    galleryImages: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "open-source-day",
    slug: "open-source-day",
    title: "Open Source Day",
    date: "JAN 20, 2024",
    location: "Lab Complex",
    description:
      "Learn how to make your first PR and contribute to real projects.",
    image: "/placeholder.svg?height=400&width=600",
    status: "planned",
    eventType: "event",
    galleryImages: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
];
