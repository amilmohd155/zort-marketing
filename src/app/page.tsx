import {
  HeroSection,
  Dashboard,
  FeatureSection,
  MarqueeSection,
  HowitWorksSection,
  Support,
  CTA,
} from "@/sections";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <main className="bg-background overflow-x-clip font-[family-name:var(--font-geist-sans)]">
      <div className="relative flex h-screen flex-col justify-center">
        <HeroSection />
        <MarqueeSection />
      </div>
      <Dashboard />
      <FeatureSection />
      <HowitWorksSection />
      <CTA />
      <Support />
      <Footer />
    </main>
  );
}
