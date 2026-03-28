import type { Metadata } from "next";
import { Barlow, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/seo/metadata";

const sans = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
