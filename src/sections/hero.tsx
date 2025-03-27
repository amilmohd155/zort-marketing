import { DownloadButton } from "@/components";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="grid h-screen max-h-screen grid-cols-1 px-4 md:grid-cols-2">
      <div className="flex flex-col items-center gap-y-8 md:justify-center">
        <h1 className="text-center text-6xl md:mx-30">
          Smarter{" "}
          <span className="to-secondary bg-linear-30 from-[#1b2c8d] bg-clip-text text-transparent">
            Betting
          </span>{" "}
          Starts Here
        </h1>
        <h3 className="text-center md:mx-10">
          Harness the power of AI to track, analyze, and optimize your sports
          betting. Instant bet slip scanning, real-time analytics, and
          intelligent insights at your fingertips.
        </h3>
        <DownloadButton />
      </div>
    </section>
  );
};
