"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/content/surent-capital/site-content";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header id="global-nav">
        <div className="nav-shell">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active-nav" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="nav-cta">
            Submit a Deal
          </Link>
          <button
            type="button"
            className="nav-hamburger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
        id="mobile-menu"
        className={open ? "mobile-menu-open" : undefined}
        aria-hidden={!open}
      >
        {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="mobile-menu-link"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
      ))}
        <Link
          href="/contact"
          className="mobile-menu-cta"
          onClick={() => setOpen(false)}
        >
          Submit a Deal
        </Link>
      </div>
    </>
  );
}
