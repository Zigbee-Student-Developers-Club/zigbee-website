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
        "relative w-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50",
        className
      )}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Image
        fill
        priority
        alt={title}
        src={backgroundImage}
        className={classNames("object-cover opacity-10", {
          hidden: !backgroundImage,
        })}
      />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-purple-200 dark:to-white">
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
            "mt-4 text-base font-bold md:text-xl text-slate-700 dark:text-gray-300",
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
