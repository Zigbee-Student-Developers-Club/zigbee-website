"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { contactInfo, footerItemLinks, socialLinks } from "@/constants";

/* ---------------- MOTION VARIANTS ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hoverLift = {
  whileHover: { y: -3 },
  whileTap: { scale: 0.95 },
};

/* ---------------- FOOTER ---------------- */

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border bg-background"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className="container mx-auto px-4 pt-12 pb-6"
        initial="hidden"
        variants={container}
        viewport={{ once: true, margin: "-120px" }}
        whileInView="visible"
      >
        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* ================= BRAND ================= */}
          <motion.div
            className="col-span-1 sm:col-span-2 md:col-span-1"
            variants={item}
          >
            <motion.div {...hoverLift}>
              <Link
                className="flex items-center gap-2 text-sm font-normal"
                href="/"
              >
                <Image
                  priority
                  alt="Zigbee Logo"
                  className="rounded-full dark:invert"
                  height={30}
                  src="/logo.png"
                  width={40}
                />
                <span className="font-bold text-black dark:text-white">
                  Zigbee Student Developers' Club
                </span>
              </Link>
            </motion.div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Zigbee is a student-run community, led by OUTR MCA students,
              dedicated to fostering software development skills and innovation.
            </p>
          </motion.div>

          {/* ================= FOOTER LINKS ================= */}
          {footerItemLinks.map(({ label, value }) => (
            <motion.div key={label} variants={item}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {label}
              </h3>
              <ul className="space-y-2">
                {value.map(({ label: linkLabel, href }) => (
                  <motion.li key={linkLabel} {...hoverLift}>
                    <Link
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      href={href}
                    >
                      {linkLabel}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* ================= SOCIALS ================= */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Socials
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    aria-label={label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    href={href}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div variants={item}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="space-y-2">
              {contactInfo.map(({ label, value }) => (
                <motion.p
                  className="text-sm text-muted-foreground"
                  key={label}
                  whileHover={{ x: 4 }}
                >
                  {value}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          className="mt-12 border-t border-border pt-8 text-center"
          variants={item}
        >
          <p className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} Zigbee Student Developers' Club. All
            rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
