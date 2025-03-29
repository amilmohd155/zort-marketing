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
  return (
    //Todo Need to change background color based on scroll trigger
    <section
      id="features"
      className="bg-linear-[162deg] from-[#11151b] to-[#030303]"
    >
      <div className="container mx-auto min-h-screen max-w-screen-xl px-4">
        <div className="pt-[98px] md:pt-[130px] lg:pt-[135px]">
          <div className="flex items-center justify-center">
            <h2 className="max-w-3xs bg-linear-45 from-[#5f5f60] via-[#9a9a9a] to-[#d8d8d8] bg-clip-text text-center text-3xl font-black text-transparent">
              Smart Features
              <br /> for <br /> Smart Betting
            </h2>
          </div>
          <div className="mx-auto mt-5 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:max-w-3xl">
            {features.map((feature) => (
              <FeatureCard key={feature.label} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature: { label, description, icon },
}: {
  feature: Feature;
}) => {
  return (
    <div className="bg-card/50 flex flex-col items-center justify-center gap-y-3 rounded-2xl border px-3 py-5 text-center lg:gap-y-5">
      <div className="text-card-foreground/60 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold lg:text-2xl lg:whitespace-nowrap">
        {label}
      </h3>
      <p className="text-sm text-white/60 lg:text-base">{description}</p>
    </div>
  );
};
