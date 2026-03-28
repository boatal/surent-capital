"use client";

import { type ReactNode, useEffect, useRef } from "react";

type Delay = "rd1" | "rd2" | "rd3" | "rd4";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: Delay | number;
  stagger?: boolean;
};

function resolveDelayClass(delay?: Delay | number) {
  if (typeof delay === "string") return delay;
  if (delay === undefined) return "";
  if (delay >= 0.44) return "rd4";
  if (delay >= 0.3) return "rd3";
  if (delay >= 0.18) return "rd2";
  return "rd1";
}

export function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const delayClass = resolveDelayClass(delay);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${delayClass ? ` ${delayClass}` : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
