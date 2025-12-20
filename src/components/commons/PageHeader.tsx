"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({
  title,
  description = "",
  backgroundImage = "/logo.png",
  className = "",
}: PageHeaderProps) => {
  return (
    <section
      className={classNames(
        "relative w-full min-h-[280px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <Image
        fill
        priority
        alt={title}
        src={backgroundImage}
        className={classNames("object-cover opacity-20", {
          hidden: !backgroundImage,
        })}
      />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h1>
        <Image
          alt="section separator"
          height={18}
          src="/separator.png"
          width={240}
          className={classNames("mx-auto mt-4 opacity-80", {
            hidden: !description,
          })}
        />
        <p
          className={classNames(
            "mt-4 text-base md:text-lg text-neutral-600 dark:text-gray-500",
            {
              hidden: !description,
            }
          )}
        >
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default PageHeader;
