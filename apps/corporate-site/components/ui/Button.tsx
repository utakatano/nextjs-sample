import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: ButtonProps) {
  const classes = cn(
    styles.button,
    variant === "primary" ? styles.primary : styles.ghost,
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        className={classes}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
