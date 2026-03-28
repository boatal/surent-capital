import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
};

type FooterProps = {
  links: readonly FooterLink[];
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="global-footer">
      <div className="footer-shell">
        <span className="footer-logo">Surent Capital</span>
        <nav className="footer-nav" aria-label="Footer">
          {links.map((link) => (
            <Link key={`${link.href}-${link.label}`} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="footer-copy">&copy; 2025 Surent Capital &middot; Private</span>
      </div>
    </footer>
  );
}
