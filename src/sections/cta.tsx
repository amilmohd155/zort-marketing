import { Circles, DownloadButton } from "@/components";
import { MockDevice } from "@/components/mock-device";
import Image from "next/image";

// bg-[#142147]
export const CTA = () => {
  return (
    <section className="text-primary-foreground relative overflow-clip">
      <div className="container mx-auto">
        <div className="px-4 py-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-y-5 lg:items-start">
              <h2 className="font-display max-w-md text-center text-3xl font-bold lg:text-start lg:text-6xl lg:leading-18">
                Ready to boost your betting experience ?
              </h2>
              <DownloadButton className="w-44" />
            </div>
            <div className="z-10 mx-auto flex flex-row">
              <MockDevice className="origin-top-right -rotate-12">
                <Image
                  src="/screens/screen1.png"
                  alt="App screenshot 1"
                  width={1206}
                  height={2622}
                  className="aspect-auto w-[200px]"
                />
              </MockDevice>
              <MockDevice className="z-0">
                <Image
                  src="/screens/screen2.png"
                  alt="App screenshot 2"
                  width={1206}
                  height={2622}
                  className="aspect-auto w-[200px]"
                />
              </MockDevice>
              <MockDevice className="-z-10 origin-top-left rotate-12">
                <Image
                  src="/screens/screen3.png"
                  alt="App screenshot 3"
                  width={1206}
                  height={2622}
                  className="aspect-auto w-[200px]"
                />
              </MockDevice>
            </div>
          </div>
        </div>
      </div>

      <Circles className="absolute top-1/2 right-0 left-0 h-full w-full -translate-y-1/2 scale-150 opacity-20 mix-blend-screen blur-2xl md:scale-150 md:opacity-20 lg:scale-200" />
    </section>
  );
};
