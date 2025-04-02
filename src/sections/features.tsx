"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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

export const FeatureSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    //Todo Need to change background color based on scroll trigger
    <section
      ref={ref}
      id="features"
      className={cn(
        "bg-linear-[162deg] from-[#11151b] to-[#030303]",
        "md:h-[calc(100vh+4000px)]",
      )}
      // style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <div className="md:sticky md:top-0">
        <div className="container mx-auto min-h-screen max-w-screen-xl px-4">
          <div className="pt-[98px] md:pt-[130px] lg:pt-[135px]">
            <div className="sticky top-[12vh] flex items-center justify-center md:relative md:top-0">
              <h2 className="font-display max-w-3xs bg-linear-45 from-[#5f5f60] via-[#9a9a9a] to-[#d8d8d8] bg-clip-text text-center text-3xl font-bold text-transparent">
                Smart Features
                <br /> for <br /> Smart Betting
              </h2>
            </div>
            <div className="mx-auto mt-12 hidden grid-cols-2 gap-5 md:grid lg:max-w-3xl">
              {features.map((feature, index) => (
                <FeatureCard.Desktop
                  key={feature.label}
                  feature={feature}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
            <div className="relative mx-auto mt-5 grid auto-rows-fr grid-cols-1 gap-5 md:hidden">
              {features.map((feature, index) => (
                <FeatureCard.Mobile
                  key={feature.label}
                  feature={feature}
                  progress={scrollYProgress}
                  length={features.length}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mobile = ({
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
      style={{ scale, top: `calc(35vh + ${index * 15}px)` }}
      className="bg-card/50 sticky flex flex-col items-center justify-center gap-y-3 rounded-2xl border px-3 py-5 text-center backdrop-blur-lg"
    >
      <div className="text-card-foreground/60 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold">{label}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </motion.div>
  );
};

const Desktop = ({
  feature: { label, description, icon },
  progress,
  index,
}: {
  feature: Feature;
  index: number;
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, [index * 0.25, 1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="bg-card/50 flex cursor-pointer flex-col items-center justify-center gap-y-3 rounded-2xl border px-3 py-5 text-center lg:gap-y-5"
    >
      <div className="text-card-foreground/60 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold lg:text-2xl lg:whitespace-nowrap">
        {label}
      </h3>
      <p className="text-sm text-white/60 lg:text-base">{description}</p>
    </motion.div>
  );
};

const FeatureCard = {
  Mobile,
  Desktop,
};
