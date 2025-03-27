import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section>
      <h1 className="text-6xl">
        Smarter <span>Betting</span> Starts Here
      </h1>
      <h3>
        Harness the power of AI to track, analyze, and optimize your sports
        betting. Instant bet slip scanning, real-time analytics, and intelligent
        insights at your fingertips.
      </h3>
      <Button variant="default" size="lg">
        Get the App
      </Button>
      {/* //? Change based on the device */}
    </section>
  );
};
