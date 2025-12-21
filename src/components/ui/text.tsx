import React from "react";

import { cn } from "@/lib/utils";

type TextVariant = "p" | "lead" | "large" | "small" | "muted";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  children: React.ReactNode;
}

export const Text = ({
  variant = "p",
  children,
  className,
  ...props
}: TextProps) => {
  const variantStyles = {
    p: "leading-7 [&:not(:first-child)]:mt-6",
    lead: "text-xl text-muted-foreground",
    large: "text-lg font-semibold",
    small: "text-sm font-medium leading-none",
    muted: "text-sm text-muted-foreground",
  };

  return (
    <p className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </p>
  );
};
