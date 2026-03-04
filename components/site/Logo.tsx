import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Surent Capital"
      className="inline-flex items-center gap-3"
    >
      <svg
        width={compact ? 22 : 28}
        height={compact ? 22 : 28}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="6.5" y="6.5" width="43" height="43" stroke="var(--accent)" />
        <path d="M16 35L28 17L40 35" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M20 29H36" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
      <span
        className={`font-heading text-[var(--text)] ${
          compact ? "text-lg tracking-[0.08em]" : "text-xl tracking-[0.1em]"
        }`}
      >
        SURENT CAPITAL
      </span>
    </Link>
  );
}
