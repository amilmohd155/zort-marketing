"use client";

import { SupportForm } from "@/components/support.form";
import { SupportModal } from "@/components/support.modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Support = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="support"
      className="from-primary/10 to-background bg-linear-to-b"
    >
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-4 py-12">
          <div className="grid min-h-[50vh] grid-cols-1 gap-5">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <h2 className="text-center text-3xl font-bold md:text-4xl">
                Have a question?
              </h2>
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="transition-transform duration-300 active:scale-80"
              >
                Contact us
              </Button>
            </div>
            <SupportModal open={open} close={() => setOpen(false)}>
              <SupportForm close={() => setOpen(false)} />
            </SupportModal>
            {/* <div className="">
              <SupportForm />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
