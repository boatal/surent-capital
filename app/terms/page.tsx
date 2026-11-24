import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Terms Of Use",
  description:
    "Review the Surent Capital terms of use governing access to this website and related communications.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="pt-20">
        <section className="site-section border-b border-rule">
          <div className="site-container">
            <p className="text-[0.58rem] uppercase tracking-[0.35em] text-gold-ink">
              Terms
            </p>
            <h1 className="mt-8 font-serif text-[clamp(2.5rem,4vw,4rem)] font-light text-ink">
              Terms of Use
            </h1>
            <p className="mt-8 max-w-[42rem] text-[0.78rem] leading-[2.1] tracking-[0.03em] text-secondary">
              Use of this website is subject to standard terms governing
              informational content, communications, and permissible use.
              Additional details will be published in a formal terms update.
            </p>
          </div>
        </section>
      </main>
      <Footer links={[{ href: "/", label: "Home" }]} />
    </div>
  );
}
