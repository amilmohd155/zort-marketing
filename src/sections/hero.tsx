import { DownloadButton } from "@/components";

export const HeroSection = () => {
  return (
    <section className="">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid h-screen grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <h1 className="max-w-xs text-center text-5xl md:text-6xl">
              Smarter{" "}
              <span className="to-secondary bg-linear-30 from-[#1b2c8d] bg-clip-text text-transparent">
                Betting
              </span>{" "}
              Starts Here
            </h1>
            <h3 className="text-center md:mx-10">
              Harness the power of AI to track, analyze, and optimize your
              sports betting. Instant bet slip scanning, real-time analytics,
              and intelligent insights at your fingertips.
            </h3>
            <DownloadButton />
          </div>
          {/* //Todo : Add hero image */}
        </div>
      </div>
    </section>
  );
};
