import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Review the Surent Capital privacy policy for information about data collection, use, and contact practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="pt-20">
        <section className="site-section border-b border-rule">
          <div className="site-container">
            <p className="text-[0.58rem] uppercase tracking-[0.35em] text-gold-ink">
              Privacy
            </p>
            <h1 className="mt-8 font-serif text-[clamp(2.5rem,4vw,4rem)] font-light text-ink">
              Privacy Policy
            </h1>
            <p className="mt-8 max-w-[42rem] text-[0.78rem] leading-[2.1] tracking-[0.03em] text-secondary">
              Surent Capital maintains appropriate safeguards for information
              shared through this website. Additional details will be provided in
              a formal policy update.
            </p>
          </div>
        </section>
      </main>
      <Footer links={[{ href: "/", label: "Home" }]} />
    </div>
  );
}
