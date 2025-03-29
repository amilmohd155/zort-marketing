"use client";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "./menu.icon";
import { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { DownloadButton } from "./download.button";
import { FaInstagram, FaTiktok } from "react-icons/fa";

type MenuItem = {
  label: string;
  href: string;
  type: "internal" | "social";
  icon?: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    label: "features",
    href: "#features",
    type: "internal",
  },
  {
    label: "how it works",
    href: "#how-it-works",
    type: "internal",
  },
  {
    label: "support",
    href: "#support",
    type: "internal",
  },
  {
    label: "instagram",
    href: "/",
    type: "social",
    icon: <FaInstagram />,
  },
  {
    label: "tiktok",
    href: "/",
    type: "social",
    icon: <FaTiktok />,
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="fixed top-0 z-50 w-full px-2 py-4 md:px-5 lg:py-8">
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
                <nav className="hidden md:block">
                  <ul className="flex flex-row items-center gap-x-6">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href}>
                          <DesktopNavItem item={item} />
                        </Link>
                      </li>
                    ))}
                    <li className="py-3">
                      <Link href="#">
                        <Button variant="default" size="lg">
                          Download App
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <AnimatePresence>
              {open && (
                <motion.nav
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <MobileNav />
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

const MobileNav = () => {
  return (
    <ul className="flex flex-col">
      {menuItems
        .filter((item) => item.type === "internal")
        .map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block py-3 text-center capitalize active:bg-black/50"
            >
              {item.label}
            </Link>
          </li>
        ))}
      <div className="flex flex-row items-center justify-center gap-x-2 py-2">
        {menuItems
          .filter((item) => item.type === "social")
          .map((item) => (
            <div key={item.label} className="text-2xl">
              {item.icon}
            </div>
          ))}
      </div>
      <div className="mx-auto mt-1 h-px w-1/2 bg-white/10" />
      <li className="flex flex-col items-center gap-y-2 pt-2 pb-5">
        <span className="text-primary">Get the app</span>
        <DownloadButton className="w-30" />
      </li>
    </ul>
  );
};

const DesktopNavItem = ({ item }: { item: MenuItem }) => {
  if (item.type === "internal") {
    return <p className="capitalize">{item.label}</p>;
  }
  if (item.type === "social") {
    return (
      <div className="text-2xl" aria-label="{item.label}">
        {item.icon}
      </div>
    );
  }
};
