"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  backgroundImage,
  className,
}: PageHeaderProps) => {
  return (
    <section
      className={cn(
        "relative w-full min-h-[280px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <Image
          fill
          priority
          alt={title}
          className="object-cover opacity-20"
          src={backgroundImage}
        />
      )}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-gray-500">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default PageHeader;
