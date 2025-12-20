"use client";

import React, { useState, useEffect } from "react";

import { Cta, Features, Hero } from "@/components/Home";

<style>{`
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`}</style>;

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
