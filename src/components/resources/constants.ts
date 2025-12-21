import {
  Code,
  TreePine,
  Smartphone,
  Server,
  Palette,
  Cloud,
  Shield,
  Brain,
} from "lucide-react";
import { IconType } from "react-icons";

export interface Resource {
  title: string;
  description: string;
  link?: string;
}

export interface ResourceCategory {
  category: string;
  icon: IconType;
  resources: Resource[];
}

export interface ResourceGridProps {
  categories: ResourceCategory[];
}

export const resourceData: ResourceCategory[] = [
  {
    category: "Frontend Development",
    icon: Code,
    resources: [
      {
        title: "MDN Web Docs",
        description: "The bible of web development",
        link: "https://developer.mozilla.org/en-US/",
      },
      {
        title: "React Documentation",
        description: "Official React documentation and guides",
        link: "https://reactjs.org/docs/getting-started.html",
      },
      {
        title: "Vue.js Documentation",
        description: "Progressive JavaScript framework",
        link: "https://vuejs.org/guide/",
      },
      {
        title: "Angular Documentation",
        description: "Platform for building web applications",
        link: "https://angular.io/docs",
      },
      {
        title: "Chai aur React",
        description: "Learn React in Hindi by Hitesh Choudhary",
        link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
      },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    resources: [
      {
        title: "Node.js Documentation",
        description: "JavaScript runtime documentation",
        link: "https://nodejs.org/en/docs/",
      },
      {
        title: "Python Documentation",
        description: "Official Python programming guide",
        link: "https://docs.python.org/3/",
      },
      {
        title: "Java Documentation",
        description: "Oracle's official Java documentation",
        link: "https://docs.oracle.com/en/java/",
      },
      {
        title: "AWS Documentation",
        description: "Amazon Web Services complete guide",
        link: "https://aws.amazon.com/documentation/",
      },
      {
        title: "Master on Nodejs",
        description: "Complete Node.js course by Piyush Garg",
        link: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
      },
    ],
  },
  {
    category: "Data Structures & Algorithms",
    icon: TreePine,
    resources: [
      {
        title: "A2Z DSA Sheet",
        description: "Comprehensive DSA sheet by Striver",
        link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      },
      {
        title: "A2Z DSA Playlist",
        description: "Complete DSA video series",
        link: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
      },
      {
        title: "Data Structures and Algorithms",
        description: "Interactive algorithm visualizations",
        link: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      },
      {
        title: "Aptitude Tutorials",
        description: "Complete aptitude preparation by CareerRide",
        link: "https://youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&si=nBYrqAj3qwI8u6uu",
      },
      {
        title: "Master Next.js by Building Real Apps",
        description: "Complete Next.js course with projects",
        link: "https://www.youtube.com/playlist?list=PL6QREj8te1P7gixBDSU8JLvQndTEEX3c3",
      },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    resources: [
      {
        title: "Android Fundamentals",
        description: "Complete Android development course",
        link: "https://www.youtube.com/playlist?list=PLQkwcJG4YTCTq1raTb5iMuxnEB06J1VHX",
      },
      {
        title: "React Native",
        description: "Build mobile apps with React Native",
        link: "https://www.youtube.com/watch?v=ZBCUegTZF7M",
      },
      {
        title: "Jetpack Compose",
        description: "Modern Android UI toolkit",
        link: "https://www.youtube.com/playlist?list=PLQkwcJG4YTCSpJ2NLhDTHhi6XBNfk9WiC",
      },
      {
        title: "Next level CSS",
        description: "Advanced CSS tutorials and techniques",
        link: "https://www.youtube.com/@lundeveloper/playlists",
      },
      {
        title: "Chai aur Django",
        description: "Learn Django in Hindi by Hitesh Choudhary",
        link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy",
      },
    ],
  },
  {
    category: "Artificial Intelligence & ML",
    icon: Brain,
    resources: [
      {
        title: "TensorFlow",
        description: "End-to-end ML platform by Google",
        link: "https://www.tensorflow.org/",
      },
      {
        title: "Google AI",
        description: "Google's AI research and tools",
        link: "https://ai.google/",
      },
      {
        title: "Machine Learning",
        description: "Complete ML playlist by Krishna Naik",
        link: "https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ",
      },
      {
        title: "Harvard's Artificial Intelligence",
        description: "CS50's Introduction to AI with Python",
        link: "https://youtu.be/5NgNicANyqM?si=xit3XrA7Hmoi2E2V",
      },
      {
        title: "NumPy",
        description: "Fundamental package for scientific computing",
        link: "https://numpy.org/",
      },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    resources: [
      {
        title: "Docker",
        description: "Platform for containerized applications",
        link: "https://www.docker.com/",
      },
      {
        title: "Kubernetes",
        description: "Container orchestration platform",
        link: "https://kubernetes.io/",
      },
      {
        title: "AWS",
        description: "Amazon's cloud computing platform",
        link: "https://aws.amazon.com/",
      },
      {
        title: "Azure",
        description: "Microsoft's cloud computing service",
        link: "https://azure.microsoft.com/",
      },
      {
        title: "Google Cloud",
        description: "Google's cloud computing services",
        link: "https://cloud.google.com/",
      },
    ],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    resources: [
      {
        title: "NIST",
        description: "Cybersecurity framework and resources",
        link: "https://csrc.nist.gov/",
      },
      {
        title: "Cybersecurity Training for Beginners",
        description: "Complete cybersecurity course by Edureka",
        link: "https://youtube.com/playlist?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&si=BBBuqgtnoxKT0j06",
      },
      {
        title: "Docker and DevOps Roadmap",
        description: "Complete DevOps guide by Harkirat Singh",
        link: "https://www.youtube.com/watch?v=fSmLiOMp2qI",
      },
      {
        title: "Pandas",
        description: "Data analysis and manipulation tool",
        link: "https://pandas.pydata.org/",
      },
      {
        title: "Azure Documentation",
        description: "Microsoft Azure cloud platform docs",
        link: "https://docs.microsoft.com/en-us/azure/",
      },
    ],
  },
  {
    category: "Design & UI/UX",
    icon: Palette,
    resources: [
      {
        title: "Figma Bootcamp",
        description: "Complete Figma tutorial by Intellipaat",
        link: "https://www.youtube.com/watch?v=MGlKO2JrvxE",
      },
      {
        title: "Figma Bootcamp Advanced",
        description: "Advanced Figma course",
        link: "https://www.youtube.com/watch?v=BU_afT-aIn0&t=195s",
      },
      {
        title: "GitHub",
        description: "World's leading development platform",
        link: "https://github.com/",
      },
      {
        title: "GitLab",
        description: "DevOps platform for collaboration",
        link: "https://gitlab.com/",
      },
      {
        title: "LinkedIn Learning",
        description: "Professional development courses",
        link: "https://www.linkedin.com/learning/",
      },
    ],
  },
];
