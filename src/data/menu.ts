import { IconType } from "react-icons";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

type Base = {
  label: string;
  href: string;
};

export type MenuItem =
  | (Base & {
      type: "internal";
    })
  | (Base & {
      type: "social";
      icon: IconType;
    });

export const menuItems: MenuItem[] = [
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
    href: process.env.NEXT_PUBLIC_INSTAGRAM || "#",
    type: "social",
    icon: FaInstagram,
  },
  {
    label: "tiktok",
    href: process.env.NEXT_PUBLIC_TIKTOK || "#",
    type: "social",
    icon: FaTiktok,
  },
];
