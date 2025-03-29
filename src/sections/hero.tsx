import { DownloadButton } from "@/components";
import { MockDevice } from "@/components/mock-device";
import Image from "next/image";

// pt-[98px] md:pt-[130px] lg:pt-[162px]
export const HeroSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-y-8 text-center lg:items-start lg:text-start">
            <h1 className="max-w-xs text-5xl md:text-6xl">
              Smarter{" "}
              <span className="bg-linear-to-r from-[#7474bf] to-[#348ac7] bg-clip-text text-transparent">
                Betting
              </span>{" "}
              Starts Here
            </h1>
            <h3 className="max-w-md">
              Harness the power of AI to track, analyze, and optimize your
              sports betting. Instant bet slip scanning, real-time analytics,
              and intelligent insights at your fingertips.
            </h3>
            <DownloadButton />
          </div>
          {/* //Todo : Add hero image */}
          <div className="relative mx-auto hidden perspective-midrange lg:flex">
            <MockDevice className="origin-center translate-z-12 rotate-x-0 rotate-y-[30deg] rotate-z-0 perspective-origin-center">
              <Image
                src="/screens/screen2.png"
                alt="App screenshot 2"
                width={1206}
                height={2622}
                className="aspect-auto w-[200px]"
              />
            </MockDevice>
            <MockDevice className="origin-center -translate-x-10 translate-y-10 translate-z-8 rotate-x-0 -rotate-y-[30deg] rotate-z-0 perspective-origin-center">
              <Image
                src="/screens/screen3.png"
                alt="App screenshot 3"
                width={1206}
                height={2622}
                className="aspect-auto w-[200px]"
              />
            </MockDevice>
            {/* <MockDevice className="origin-bottom-left -translate-x-1/2 rotate-12" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
