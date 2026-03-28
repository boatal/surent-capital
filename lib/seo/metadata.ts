import type { Metadata } from "next";
import { fallbackSiteUrl, siteName } from "@/content/surent-capital/site-content";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
}

type PageMetadataInput = {
  title: string;
  description: string;
  pathname?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  pathname,
  path,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = new URL(pathname ?? path ?? "/", siteUrl).toString();
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Surent Capital | Structured Capital For Complex Real Estate",
    template: "%s | Surent Capital",
  },
  icons: {
    icon: "/favicon-s.svg",
    shortcut: "/favicon-s.svg",
    apple: "/favicon-s.svg",
  },
  description:
    "Surent Capital provides structured capital for complex real estate situations where timing, complexity, and execution certainty determine the outcome.",
  openGraph: {
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
