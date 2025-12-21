"use client";

import React, { useState, useEffect } from "react";

import { Cta, Features, Hero } from "@/components/Home";

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      <Hero isVisible={isVisible} scrollY={scrollY} />
      <Features isVisible={isVisible} />
      <Cta />
    </main>
  );
};

export default Home;
