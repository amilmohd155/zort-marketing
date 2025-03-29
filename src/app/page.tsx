import {
  HeroSection,
  FeatureSection,
  MarqueeSection,
  HowitWorksSection,
  Support,
  CTA,
} from "@/sections";
import { Footer } from "@/sections/footer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background overflow-x-clip font-[family-name:var(--font-geist-sans)]">
      <div className="relative flex h-screen flex-col justify-center">
        <HeroSection />
        <MarqueeSection />
      </div>
      <FeatureSection />
      <HowitWorksSection />
      <CTA />
      <Support />
      <Footer />
    </main>
  );
}
