import {
  HeroSection,
  FeatureSection,
  MarqueeSection,
  HowitWorksSection,
  Support,
} from "@/sections";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="flex h-screen flex-col justify-between">
        <HeroSection />
        <MarqueeSection />
      </div>
      <FeatureSection />
      <HowitWorksSection />
      <Support />
    </main>
  );
}
