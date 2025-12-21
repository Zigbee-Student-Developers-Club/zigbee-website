"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { contactInfo, footerItemLinks, socialLinks } from "@/constants";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative border-t border-purple-200 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements - only render on client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      )}

      <div className="relative z-10">
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
                <span className="font-bold text-slate-900">
                  Zigbee Student Developers' Club
                </span>
              </Link>
              <p className="mt-4 text-pretty text-sm text-slate-600 leading-relaxed">
                Zigbee is a student-run community, led by OUTR MCA students,
                dedicated to fostering software development skills and
                innovation.
              </p>
            </div>
            {footerItemLinks.map(({ label, value }) => (
              <div key={label}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  {label}
                </h3>
                <ul className="space-y-2">
                  {value.map(({ label: linkLabel, href }) => (
                    <li key={linkLabel}>
                      <Link
                        className="text-sm text-slate-600 transition-colors hover:text-purple-700"
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
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                Socials
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    aria-label={label}
                    className="text-slate-600 transition-colors hover:text-purple-700"
                    {...{ href }}
                    key={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                Contact
              </h3>
              <div className="space-y-2">
                {contactInfo.map(({ label, value }) => (
                  <p className="text-sm text-slate-600" key={label}>
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 border-t border-purple-200 pt-8 text-center">
            <p className="text-sm text-slate-600">
              ©{isMounted ? new Date().getFullYear() : 2025} Zigbee Student
              Developers' Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
