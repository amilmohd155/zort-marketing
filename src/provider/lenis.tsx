"use client";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

const Lenis = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      options={{
        autoRaf: true,
        prevent: (node) => node.id === "modal",
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
