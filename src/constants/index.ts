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
  {
    name: "About us",
    link: routes.about,
  },
];

export const footerItemLinks = [
  {
    label: "About & Team",
    value: [
      { label: "About Us", href: routes.about },
      { label: "Our Team", href: routes.about },
      { label: "Join Us", href: routes.auth.login },
    ],
  },
  {
    label: "Popular Links",
    value: [
      { label: "Events & workshops", href: routes.events },
      { label: "Resources", href: routes.resources },
      { label: "Alumni", href: routes.alumni },
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
