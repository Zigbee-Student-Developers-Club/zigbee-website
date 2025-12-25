import { Coffee, LucideIcon, Presentation } from "lucide-react";

export interface FeaturesSectionProps {
  isVisible: boolean;
}

export interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export interface FeatureCardProps {
  feature: FeatureData;
  delay: number;
  isVisible: boolean;
}

export const features = [
  {
    icon: Presentation,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFo6iXuqZl_QQ/feedshare-shrink_2048_1536/B56ZseNp1gIYAw-/0/1765738455909?e=1767830400&v=beta&t=WTsOzZzb-1-f0hmYeM5IIgdul68bJpNBSCblV2IS86Q",
    title: "Technical Workshops",
    description:
      "Hands-on, instructor-led workshops focused on real-world technologies, problem-solving, and practical skill development.",
  },
  {
    icon: Coffee,
    image:
      "https://res.cloudinary.com/dljszrwl0/image/upload/v1766652045/DSC_0614_sr0mta.webp",
    title: "Community & Alumni Support",
    description:
      "A collaborative network where members and alumni connect, mentor, share experiences, and support each other’s growth.",
  },
];
