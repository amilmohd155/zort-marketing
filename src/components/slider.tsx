"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  PanInfo,
  Transition,
  Variants,
  wrap,
} from "motion/react";
import { Children, useCallback, useState } from "react";
import { ChevronRight } from "lucide-react";

const variants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  active: { zIndex: 1, x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    zIndex: 1,
  }),
};

const transition: Transition = {
  //   x: { type: "spring", stiffness: 300, damping: 30 },
  //   opacity: { duration: 0.2 },
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slider = ({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideItems = Children.toArray(children);

  const activeItemIndex = wrap(0, slideItems.length, page);

  const paginate = useCallback(
    (dir: number) => {
      setPage([page + dir, dir]);
    },
    [page],
  );

  const dragHandler = ({ offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    } else if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    }
  };

  return (
    <div className={cn("relative flex overflow-clip", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={page}
          className="relative w-full shrink-0 cursor-grab active:cursor-grabbing"
          custom={direction}
          variants={variants}
          initial="initial"
          animate="active"
          //   exit="exit"
          transition={transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, dragInfo) => dragHandler(dragInfo)}
        >
          {slideItems[activeItemIndex]}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          ease: ["easeInOut"],
          repeatType: "loop",
          repeatDelay: 0.4,
          repeat: 3,
        }}
        viewport={{ once: true }}
        className="absolute top-1/2 right-0 flex -translate-y-1/2 flex-row items-center px-3 py-1 text-xs md:text-xl"
      >
        <span className="me-1 md:me-3">Swipe</span>
        <ChevronRight className="size-3 md:size-5" />
        <ChevronRight className="size-3 md:size-5" />
        <ChevronRight className="size-3 md:size-5" />
      </motion.div>
    </div>
  );
};
