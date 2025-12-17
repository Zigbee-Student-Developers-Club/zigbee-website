"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import { navItems } from "@/constants";

import { NavItems } from "../ui/resizable-navbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between bg-white shadow-sm items-center lg:px-8 p-4 fixed top-0 left-0 z-50 w-full">
      <Link
        className="flex items-center space-x-2 py-1 text-sm font-normal text-black"
        href="/"
      >
        <Image
          priority
          alt="Zigbee Logo"
          className="dark:invert rounded-full"
          height={30}
          src="/logo.png"
          width={30}
        />
        <span className="font-bold text-black dark:text-white">
          Zigbee Student Developers' Club
        </span>
      </Link>
      <div className="hidden md:flex gap-6">
        <NavItems items={navItems} />
      </div>
      <Link
        className="bg-black hidden md:block text-white text-sm px-4 py-1.5 rounded drop-shadow-sm"
        href="" //signup link or login link
      >
        Join The Club
      </Link>
      <div className="md:hidden flex items-center">
        <button className="" onClick={() => setOpen(state => !state)}>
          {open ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>

        <div
          className={`border-t absolute bg-white pt-5 z-40 top-full left-0 shadow-md w-full pb-6 px-4  ${
            open ? "scale-y-100" : "scale-y-0"
          } transition-all duration-300 ease-in-out origin-top`}
          onClick={() => setOpen(open => !open)}
        >
          <NavItems items={navItems} />
          <Link
            className="bg-black block text-center mt-4 w-full border md:hidden text-white px-4 py-1 rounded drop-shadow-sm"
            href="" //signup link or login link
          >
            Join The Club
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
