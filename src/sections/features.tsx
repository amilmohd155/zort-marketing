import { Button } from "@/components/ui/button";

const buzzWords = ["Easy", "Interactive", "Smart", "Secure"];

export const Features = () => {
  return (
    //Todo Need to change background color based on scroll trigger
    <section className="min-h-screen bg-linear-[162deg] from-[#11151b] to-[#030303]">
      <div className="mx-auto max-w-screen-xl items-center justify-center px-4 py-12 text-center">
        <div className="gap-y-5">
          <h3>Sports betting made</h3>
          <h2 className="text-5xl font-bold tracking-wider">{buzzWords[0]}</h2>
        </div>
        <div className="mt-5">
          <Button variant="ghost"></Button>
        </div>
      </div>
    </section>
  );
};
