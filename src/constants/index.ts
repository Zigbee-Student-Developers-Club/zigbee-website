import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      { label: "Our Team", href: routes.team },
      // { label: "Join Us", href: routes.auth.login },
    ],
  },
  {
    label: "Popular Links",
    value: [
      { label: "Events & workshops", href: routes.events },
      { label: "Resources", href: routes.resources },
      { label: "Alumni", href: routes.alumni },
      { label: "Codewars", href: routes.events },
    ],
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zigbeecetb",
    icon: FaLinkedin,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/zigbeecetb",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zigbee.outr",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/Zigbee-Student-Developers-Club",
    icon: FaGithub,
  },
];

export const contactInfo = [
  { label: "Email", value: "admin@zigbeeoutr.in" },
  { label: "Location", value: "Tech Surfer, MCA Department, OUTR" },
];
