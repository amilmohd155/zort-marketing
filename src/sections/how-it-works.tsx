"use client";
import { ReactNode } from "react";
import { FaCamera, FaMobile } from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { RiDashboardFill } from "react-icons/ri";

import { One, Two, Three, Four } from "@/components";

type Step = {
  id: number;
  label: string;
  description: string;
  icon: ReactNode;
  digit: ReactNode;
};

const Steps: Step[] = [
  {
    id: 1,
    label: "Open Zort",
    description:
      "Launch the app and point your camera at any bet slip - no sign up required.",
    icon: <FaMobile />,
    digit: <One className="digits" />,
  },
  {
    id: 2,
    label: "Take a Photo",
    description:
      "Capture your bet slip with your phone's camera. Works with both physical and digital slips.",
    icon: <FaCamera />,
    digit: <Two className="digits" />,
  },
  {
    id: 3,
    label: "Instant Processing",
    description:
      "Our AI immediately extracts all bet details including odds, stakes, and potential returns.",
    icon: <GoZap />,
    digit: <Three className="digits" />,
  },
  {
    id: 4,
    label: "View Results",
    description:
      "See your organized bets and track your performance over time through the interactive dashboard.",
    icon: <RiDashboardFill />,
    digit: <Four className="digits" />,
  },
];

export const HowitWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative bg-linear-150 from-[#030303] to-[#11151b]"
    >
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-4 py-24">
          <div className="text-center">
            <h2 className="font-display text-4xl leading-18 font-semibold">
              Start Betting
            </h2>
            <h3 className="font-display text-primary text-xl font-medium tracking-wide uppercase">
              in 4 easy steps
            </h3>
          </div>
          <div className="mx-auto mt-5 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:max-w-3xl">
            {Steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className="group relative col-span-1 flex cursor-pointer flex-col items-center gap-2 rounded-sm border border-dashed bg-black/30 px-3 py-5 text-center transition-transform duration-200 hover:scale-95 lg:px-5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300 opacity-0 blur-xs transition-opacity duration-100 ease-in-out group-hover:opacity-40">
        {step.digit}
      </div>
      <div className="text-card-foreground/60 -rotate-15 text-4xl transition-transform duration-100 ease-in-out group-hover:rotate-0">
        {step.icon}
      </div>
      <h2 className="text-xl font-semibold lg:text-2xl lg:whitespace-nowrap">
        {step.label}
      </h2>
      <p className="text-accent-foreground/70 text-sm lg:text-base">
        {step.description}
      </p>
    </div>
  );
};
