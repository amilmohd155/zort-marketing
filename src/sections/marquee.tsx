import * as motion from "motion/react-client";
import { Fragment } from "react";

type MarqueeItem = {
  label: string;
  icon: string;
};

const marqueeItems: MarqueeItem[] = [
  {
    label: "Multi-slip scanning",
    icon: "💫",
  },
  {
    label: "85% accuracy rate",
    icon: "📈",
  },
  {
    label: "10,000+ bets tracked",
    icon: "🏆",
  },
  {
    label: "Team Recognition Soon!",
    icon: "🎉",
  },
];

export const MarqueeSection = () => {
  return (
    <section className="overflow-x-clip py-12">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {marqueeItems.map((item) => (
                  <span
                    key={item.label}
                    className="text-lg whitespace-nowrap"
                  >{`${item.icon} ${item.label}`}</span>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
