"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/constants";
import routes from "@/routes";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const mobileItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Background wrapper for header area */}
      <div className="fixed inset-x-0 top-0 h-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pointer-events-none z-30">
        {/* Animated Background Elements - only render on client */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          </div>
        )}
      </div>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className="relative w-full"
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar>
          {/* ================= DESKTOP NAV ================= */}
          <NavBody>
            <motion.div animate="visible" initial="hidden" variants={item}>
              <NavbarLogo />
            </motion.div>

            <motion.div
              animate="visible"
              className="flex-1"
              initial="hidden"
              variants={container}
            >
              <NavItems activePath={pathname} items={navItems} />
            </motion.div>

            <motion.div
              animate="visible"
              className="relative z-30"
              initial="hidden"
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavbarButton href={routes.auth.signup} variant="dark">
                Join the club
              </NavbarButton>
            </motion.div>
          </NavBody>

          {/* ================= MOBILE NAV ================= */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
              />
            </MobileNavHeader>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <MobileNavMenu isOpen={isMobileMenuOpen}>
                  <motion.div
                    animate="visible"
                    className="flex flex-col gap-6"
                    exit={{ opacity: 0 }}
                    initial="hidden"
                    variants={container}
                  >
                    {navItems.map((itemData, idx) => {
                      const isActive = pathname === itemData.link;

                      return (
                        <motion.a
                          href={itemData.link}
                          key={idx}
                          variants={mobileItem}
                          whileHover={{ x: 6 }}
                          whileTap={{ scale: 0.96 }}
                          className={`text-lg font-semibold transition-colors ${
                            isActive
                              ? "text-purple-700 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-lg"
                              : "text-neutral-700 dark:text-neutral-200"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {itemData.name}
                        </motion.a>
                      );
                    })}

                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavbarButton
                        className="w-full border border-black dark:border-white"
                        variant="primary"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          router.push(routes.auth.signup);
                        }}
                      >
                        Join the club
                      </NavbarButton>
                    </motion.div>
                  </motion.div>
                </MobileNavMenu>
              )}
            </AnimatePresence>
          </MobileNav>
        </Navbar>
      </motion.div>
    </>
  );
};

export default Header;
