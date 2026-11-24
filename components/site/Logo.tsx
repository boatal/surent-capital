import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="nav-logo">
      <svg
        aria-hidden="true"
        className="nav-logo-mark"
        viewBox="255 255 1090 1090"
        width="26"
        height="26"
      >
        <path
          fill="#0b0b0a"
          d="M376 255h848a121 121 0 0 1 121 121v229l-121-29V407a31 31 0 0 0-31-31H407a31 31 0 0 0-31 31v370l636 159v121L255 881V376a121 121 0 0 1 121-121Z"
        />
        <path
          fill="#c8a96e"
          d="M588 542l757 184v498a121 121 0 0 1-121 121H376a121 121 0 0 1-121-121v-222l121 29v162a31 31 0 0 0 31 31h786a31 31 0 0 0 31-31V823L588 664Z"
        />
      </svg>
      Surent Capital
    </Link>
  );
}
