import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import routes from "@/routes";

export interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    link: routes.home,
  },
  {
    name: "Events",
    link: routes.events,
  },
  {
    name: "Resources",
    link: routes.resources,
  },
  {
    name: "Magazines",
    link: routes.magazines,
  },
  {
    name: "Alumni",
    link: routes.alumni,
  },
];

export const footerItemLinks = [
  {
    label: "About & Team",
    value: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Mission", href: "/mission" },
      { label: "Join Us", href: "/join" },
    ],
  },
  {
    label: "Popular Links",
    value: [
      { label: "Events", href: "/events" },
      { label: "Workshops", href: "/workshops" },
      { label: "Projects", href: "/projects" },
      { label: "Resources", href: "/resources" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
];

export const contactInfo = [
  { label: "Email", value: "zigbee@outr.ac.in" },
  { label: "Location", value: "Student Activity Center" },
];
