import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t divider bg-[var(--bg)]">
      <div className="flex w-full flex-col gap-4 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-16 2xl:px-24">
        <p>© {new Date().getFullYear()} Surent Capital. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <Link href="/privacy" className="link-underline py-1">
            Privacy
          </Link>
          <Link href="/terms" className="link-underline py-1">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
