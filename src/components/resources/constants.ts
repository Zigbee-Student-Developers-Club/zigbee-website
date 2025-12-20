import { Code, TreePine, Lightbulb } from "lucide-react";
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
    category: "Web Development",
    icon: Code,
    resources: [
      {
        title: "Full Stack Open",
        description: "Deep dive into modern web dev",
        link: "https://fullstackopen.com",
      },
      {
        title: "MDN Docs",
        description: "The bible of web development",
        link: "https://developer.mozilla.org",
      },
      {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    category: "Data Structures & Algo",
    icon: TreePine,
    resources: [
      {
        title: "NeetCode 150",
        description: "Curated list of leetcode problems",
        link: "https://neetcode.io",
      },
      {
        title: "Visualgo",
        description: "Visualizing data structures",
        link: "https://visualgo.net",
      },
      {
        title: "CP Algorithms",
        description: "Competitive programming guide",
        link: "https://cp-algorithms.com",
      },
    ],
  },
  {
    category: "Machine Learning",
    icon: Lightbulb,
    resources: [
      {
        title: "Fast.ai",
        description: "Practical deep learning for coders",
        link: "https://fast.ai",
      },
      {
        title: "Kaggle",
        description: "Datasets and competitions",
        link: "https://kaggle.com",
      },
      {
        title: "Hugging Face",
        description: "The AI community building the future",
        link: "https://huggingface.co",
      },
    ],
  },
];
