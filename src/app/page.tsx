import {
  HeroSection,
  Dashboard,
  FeatureSection,
  MarqueeSection,
  HowitWorksSection,
  Support,
  CTA,
} from "@/sections";

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
    </main>
  );
}
