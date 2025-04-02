import { MockDevice, DownloadButton } from "@/components";
import { cn } from "@/lib/utils";
import Image from "next/image";

// pt-[98px] md:pt-[130px] lg:pt-[162px]
export const HeroSection = () => {
  return (
    <section>
      <div
        className={cn(
          "md:hidden",
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#292929ff_1px,transparent_1px)]",
        )}
      />
      <div
        className={cn(
          "md:hidden",
          "pointer-events-none",
          "absolute inset-0",
          "flex items-center justify-center bg-black",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        )}
      />
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-y-8 text-center lg:items-start lg:text-start">
            <h1 className="font-display z-10 max-w-xs text-5xl font-light md:text-6xl">
              Smarter{" "}
              <span className="bg-linear-to-r from-[#7474bf] to-[#348ac7] bg-clip-text text-transparent">
                Betting
              </span>{" "}
              Starts Here
            </h1>
            <h3 className="z-10 max-w-md">
              Harness the power of AI to track, analyze, and optimize your
              sports betting. Instant bet slip scanning, real-time analytics,
              and intelligent insights at your fingertips.
            </h3>
            <div className="z-10">
              <DownloadButton />
            </div>
          </div>
          {/* //Todo : Add hero image */}
          <div className="relative mx-auto hidden perspective-midrange lg:flex">
            <div className="animate-blob bg-primary absolute top-0 -left-4 size-72 rounded-full opacity-10 mix-blend-multiply blur-xl" />
            <div className="animate-blob bg-primary absolute top-0 -right-4 size-72 rounded-full opacity-10 mix-blend-multiply blur-xl" />
            <div className="animate-blob bg-primary absolute right-1/2 bottom-8 size-72 rounded-full opacity-10 mix-blend-multiply blur-xl" />

            <MockDevice className="origin-center translate-z-12 rotate-x-0 rotate-y-[30deg] rotate-z-0 perspective-origin-center">
              <Image
                src="/screens/screen2.png"
                alt="App screenshot 2"
                width={1206}
                height={2622}
                className="aspect-auto w-[200px]"
                priority
              />
            </MockDevice>
            <MockDevice className="origin-center -translate-x-10 translate-y-10 translate-z-8 rotate-x-0 -rotate-y-[30deg] rotate-z-0 perspective-origin-center">
              <Image
                src="/screens/screen3.png"
                alt="App screenshot 3"
                width={1206}
                height={2622}
                className="aspect-auto w-[200px]"
                priority
              />
            </MockDevice>
            {/* <MockDevice className="origin-bottom-left -translate-x-1/2 rotate-12" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
