import { HeroSection, Features } from "@/sections";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <Features />
    </main>
  );
}
