import { Button } from "@/components/ui/button";

export const Support = () => {
  return (
    <section>
      <div className="container mx-auto max-w-screen-xl">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center gap-y-5">
              <h2 className="text-3xl font-bold">Have questions?</h2>
              <Button>Contact us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
