"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MenuIcon } from "../menu.icon";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="fixed top-0 z-50 w-full px-2 py-4 md:px-5">
        <div className="container mx-auto max-w-screen-xl">
          <div className="rounded-xl border bg-[#121212cc] backdrop-blur-sm">
            <div className="grid grid-cols-[1fr_auto] items-center justify-between px-4 py-2 md:grid-cols-[auto_1fr]">
              <Link href="/" className="">
                <Image
                  src="/logo.png"
                  width={793}
                  height={320}
                  alt="logo"
                  className="h-8 w-auto"
                />
              </Link>
              <div className="flex justify-end">
                <div className="md:hidden">
                  <MenuIcon open={open} setOpen={setOpen} />
                </div>
                <DesktopNav />
              </div>
            </div>
            <AnimatePresence>
              {open && (
                <motion.nav
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="flex flex-col overflow-hidden md:hidden"
                >
                  <MobileNav onClick={() => setOpen(false)} />
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* <div className="h-[98px] md:h-[130px] lg:h-[162px]" /> */}
    </header>
  );
};
