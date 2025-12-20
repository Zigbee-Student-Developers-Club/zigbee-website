import { Coffee, LucideIcon, Presentation } from "lucide-react";

export interface FeaturesSectionProps {
  isVisible: boolean;
}

export interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export interface FeatureCardProps {
  feature: FeatureData;
  delay: number;
  isVisible: boolean;
}

export const features = [
  {
    icon: Presentation,
    title: "Technical Workshops",
    description:
      "An open space with shared knowledge for all our members to work on their creative projects.",
  },
  {
    icon: Coffee,
    title: "Community Pod",
    description:
      "A space to take a break and relax on a bunch of comfy pillows for all the members to use.",
  },
];
