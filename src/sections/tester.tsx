"use client";
import Lenis from "lenis";
import ReactLenis, { LenisRef } from "lenis/react";
import {
  cancelFrame,
  frame,
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { GiLockedFortress } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { PiTargetBold } from "react-icons/pi";

type Feature = {
  label: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    label: "AI Bet Slip Scanner",
    description:
      "Instantly scan and analyze any bet slip. Our AI extracts odds, stakes, and potential returns with incredible accuracy.",
    icon: <FaSearch />,
  },
  {
    label: "Interactive Dashboard",
    description:
      "Track your performance with beautiful visualizations. Monitor win rates, ROI, and betting patterns in real-time.",
    icon: <MdDashboard />,
  },
  {
    label: "Smart Analytics",
    description:
      "Get intelligent insights about your betting behavior. Identify winning strategies and optimize your approach.",
    icon: <PiTargetBold />,
  },
  {
    label: "Secure & Private",
    description:
      "Your data is encrypted and protected. We prioritize your privacy and security above everything",
    icon: <GiLockedFortress />,
  },
];

export const Tester = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    //Todo Need to change background color based on scroll trigger

    <section
      ref={container}
      id="features"
      className="bg-linear-[162deg] from-[#11151b] to-[#030303]"
    >
      <div className="container mx-auto min-h-screen max-w-screen-xl px-4">
        <div className="pt-[98px] pb-10 md:pt-[130px] lg:pt-[135px]">
          <div className="sticky top-[12vh] flex items-center justify-center">
            <h2 className="font-display max-w-3xs bg-linear-45 from-[#5f5f60] via-[#9a9a9a] to-[#d8d8d8] bg-clip-text text-center text-3xl font-bold text-transparent">
              Smart Features
              <br /> for <br /> Smart Betting
            </h2>
          </div>

          <div className="mx-auto mt-5 grid auto-rows-fr grid-cols-1 gap-5 md:hidden">
            {features.map((feature, index) => (
              <Card
                key={feature.label}
                feature={feature}
                index={index}
                length={features.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  feature: { label, description, icon },
  index,
  length,
  progress,
}: {
  feature: Feature;
  index: number;
  length: number;
  progress: MotionValue<number>;
}) => {
  const container = useRef(null);

  const targetScale = 1 - (length - index) * 0.02;
  const range = [index * 0.25, 1];

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      key={label}
      style={{ top: `calc(35vh + ${index * 15}px)`, scale }}
      className="bg-card/50 sticky flex flex-col items-center justify-center gap-y-3 rounded-2xl border px-3 py-5 text-center backdrop-blur-lg"
    >
      <div className="text-card-foreground/60 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold">{label}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </motion.div>
  );
};
