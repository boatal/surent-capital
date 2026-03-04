import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="w-full pt-20">
        <Section className="border-t-0" minHeight="chapter">
          <Reveal>
            <div className="grid gap-4">
              <p className="section-label">PRIVACY</p>
              <h1 className="font-heading text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="max-w-[56ch] text-[var(--muted)]">
                Surent Capital maintains appropriate safeguards for information
                shared through this website. Additional details will be provided
                in a formal policy update.
              </p>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
