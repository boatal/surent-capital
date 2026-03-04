"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/12 bg-[rgb(15_28_36_/_0.72)] backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="grid h-20 w-full grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 lg:px-16 2xl:px-24">
        <div className="justify-self-start">
          <Logo compact />
        </div>
        <nav className="hidden items-center gap-8 text-xs tracking-[0.14em] text-[var(--muted)] lg:flex">
          <a href="#mandate" className="link-underline py-2">
            Mandate
          </a>
          <a href="#strategy" className="link-underline py-2">
            Strategy
          </a>
          <a href="#platform" className="link-underline py-2">
            Platform
          </a>
          <a href="#selectivity" className="link-underline py-2">
            Selectivity
          </a>
        </nav>
        <Link
          href="/inquiry"
          className="link-underline justify-self-end py-2 text-sm tracking-[0.08em] text-[var(--text)]"
        >
          Inquiry
        </Link>
      </div>
    </header>
  );
}
