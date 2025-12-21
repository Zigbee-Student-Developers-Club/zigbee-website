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
    image: "/workshop.png",
    title: "Technical Workshops",
    description:
      "Hands-on, instructor-led workshops focused on real-world technologies, problem-solving, and practical skill development.",
  },
  {
    icon: Coffee,
    image: "/community.png",
    title: "Community & Alumni Support",
    description:
      "A collaborative network where members and alumni connect, mentor, share experiences, and support each other’s growth.",
  },
];
