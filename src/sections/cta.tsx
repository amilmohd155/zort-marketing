import { DownloadButton, Circles } from "@/components";
import { MockDevice } from "@/components/mock-device";

export const CTA = () => {
  return (
    <section className="bg-primary/90 text-primary-foreground relative overflow-clip">
      <div className="container mx-auto">
        <div className="px-4 py-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-y-5 lg:items-start">
              <h2 className="max-w-md text-center text-3xl font-bold lg:text-start lg:text-6xl lg:leading-18">
                Ready to boost your betting experience ?
              </h2>
              <DownloadButton className="w-44" />
            </div>
            <div className="z-10 mx-auto">
              <MockDevice />
            </div>
          </div>
        </div>
      </div>

      <Circles className="absolute top-1/2 left-1/2 h-full w-full scale-200" />
    </section>
  );
};
