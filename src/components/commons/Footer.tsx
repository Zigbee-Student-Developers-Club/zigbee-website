import Image from "next/image";
import Link from "next/link";
import type React from "react";

import { contactInfo, footerItemLinks, socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
              href="/"
            >
              <Image
                priority
                alt="Zigbee Logo"
                className="dark:invert rounded-full"
                height={30}
                src="/logo.png"
                width={40}
              />
              <span className="font-bold text-black dark:text-white">
                Zigbee Student Developers' Club
              </span>
            </Link>
            <p className="mt-4 text-pretty text-sm text-muted-foreground leading-relaxed">
              Zigbee is a student-run community, led by OUTR MCA students,
              dedicated to fostering software development skills and innovation.
            </p>
          </div>
          {footerItemLinks.map(({ label, value }) => (
            <div key={label}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {label}
              </h3>
              <ul className="space-y-2">
                {value.map(({ label: linkLabel, href }) => (
                  <li key={linkLabel}>
                    <Link
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...{ href }}
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Socials
            </h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  {...{ href }}
                  key={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="space-y-2">
              {contactInfo.map(({ label, value }) => (
                <p className="text-sm text-muted-foreground" key={label}>
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} Zigbee Student Developers' Club. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
