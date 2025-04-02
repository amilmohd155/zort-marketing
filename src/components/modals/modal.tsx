"use client";
import { PropsWithChildren } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
type Props = PropsWithChildren<{
  open: boolean;
  closeAction: () => void;
}>;

const backdrop: Variants = {
  closed: { opacity: 0 },
  opened: {
    opacity: 1,
  },
};

const modal: Variants = {
  opening: {
    rotateX: "5deg",
    rotateY: "25deg",
    translateZ: "-100px",
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      type: "spring",
    },
  },
  opened: {
    rotateX: "0deg",
    rotateY: "0deg",
    translateZ: "0px",
    opacity: 1,
    filter: "blur(0px)",
  },
  closing: {
    rotateX: "5deg",
    rotateY: "25deg",
    translateZ: "-100px",
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      type: "spring",
      opacity: {
        delay: 0.2,
      },
    },
  },
};

export const Modal = ({ open, closeAction: close, children }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <dialog className="fixed inset-0 z-[9999] flex size-full items-center justify-center bg-transparent">
          <motion.div
            variants={backdrop}
            initial="closed"
            animate="opened"
            exit="closed"
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => close()}
          />
          <motion.div
            id="modal"
            variants={modal}
            initial="opening"
            animate="opened"
            exit="closing"
            style={{
              perspective: 500,
              transformStyle: "preserve-3d",
            }}
            transition={{
              opacity: {
                duration: 0.5,
                type: "spring",
              },
            }}
            className="text-foreground mx-auto block w-[90%] max-w-lg bg-transparent md:w-full"
            // onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </dialog>
      )}
    </AnimatePresence>
  );
};
