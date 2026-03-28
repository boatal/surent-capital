import Link from "next/link";
import type { ReactNode } from "react";

type ButtonPrimaryProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function ButtonPrimary({
  href,
  children,
  className,
  type = "button",
  disabled,
}: ButtonPrimaryProps) {
  if (href) {
    return (
      <Link href={href} className={`btn-primary ${className ?? ""}`.trim()}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-primary ${className ?? ""}`.trim()}
    >
      {children}
    </button>
  );
}
