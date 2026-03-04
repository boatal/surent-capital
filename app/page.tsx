import { HeroSection } from "@/components/home/HeroSection";
import { InquiryCtaSection } from "@/components/home/InquiryCtaSection";
import { MandateSection } from "@/components/home/MandateSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { SelectivitySection } from "@/components/home/SelectivitySection";
import { StrategySection } from "@/components/home/StrategySection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="w-full pt-20">
        <HeroSection />
        <MandateSection />
        <StrategySection />
        <PlatformSection />
        <SelectivitySection />
        <InquiryCtaSection />
      </main>
      <Footer />
    </div>
  );
}
