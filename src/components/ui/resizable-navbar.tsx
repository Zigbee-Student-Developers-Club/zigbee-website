"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}
type NavbarButtonVariant = "primary" | "dark";

type NavbarButtonProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: NavbarButtonVariant;
} & React.ComponentPropsWithoutRef<T>;

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", latest => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn("fixed inset-x-0 top-5 z-40 w-full", className)}
      initial={{ opacity: 0, y: -40 }}
      ref={ref}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child;

        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        );
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      style={{ minWidth: "800px" }}
      transition={{ damping: 28, stiffness: 180, type: "spring" }}
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible ? "0 12px 30px rgba(0,0,0,0.08)" : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 18 : 0,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden max-w-7xl items-center justify-between rounded-full px-2 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      className={cn(
        "hidden flex-1 items-center justify-center space-x-2 lg:flex",
        className
      )}
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item, idx) => (
        <motion.a
          className="relative px-4 py-2 text-neutral-600 hover:text-black dark:text-neutral-300"
          href={item.link}
          key={idx}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(idx)}
        >
          {hovered === idx && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gray-200 dark:bg-neutral-800"
              layoutId="hovered"
              transition={{ damping: 25, stiffness: 300, type: "spring" }}
            />
          )}
          <span className="relative z-20 font-bold text-[17px]">
            {item.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

/* ---------------- MOBILE NAV ---------------- */

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      transition={{ damping: 30, stiffness: 180, type: "spring" }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 18 : 0,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => (
  <div
    className={cn(
      "flex w-full items-center justify-between px-3 py-2",
      className
    )}
  >
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -14 }}
          initial={{ opacity: 0, scale: 0.98, y: -14 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex flex-col gap-4 rounded-xl bg-white px-4 py-8 shadow-xl dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <motion.div
    className="cursor-pointer"
    whileHover={{ rotate: isOpen ? 90 : 0 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    {isOpen ? <IconX /> : <IconMenu2 />}
  </motion.div>
);

/* ---------------- LOGO + BUTTON ---------------- */

export const NavbarLogo = () => (
  <motion.div whileHover={{ scale: 1.04 }}>
    <Link className="flex items-center gap-2" href="/">
      <Image alt="Zigbee Logo" height={30} src="/logo.png" width={30} />
      <span className="font-bold">Zigbee Student Developers' Club</span>
    </Link>
  </motion.div>
);

export const NavbarButton = <T extends React.ElementType = "a">({
  as,
  children,
  className,
  href,
  variant = "primary",
  ...props
}: NavbarButtonProps<T>) => {
  const Component = as || "a";

  const variants = {
    dark: "bg-black text-white dark:bg-white dark:text-black",
    primary: "bg-white text-black dark:bg-neutral-800 dark:text-white",
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        {...props}
        className={cn(
          variants[variant],
          className,
          "cursor-pointer rounded-full px-5 py-3 font-bold transition"
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
};
