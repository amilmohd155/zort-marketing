import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

type MenuItem = {
  name: string;
  href: string;
};

const MenuItem: MenuItem[] = [
  {
    name: "features",
    href: "#features",
  },
  {
    name: "how it works",
    href: "#how-it-works",
  },
  {
    name: "support",
    href: "#support",
  },
];

export const Header = () => {
  return (
    <header>
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between bg-[#121212cc] px-4 py-5 lg:px-8">
        <Link href="/">
          <Image
            src="/logo_dark 1.png"
            width={793}
            height={320}
            alt="logo"
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <Menu size={32} color="white" />
          </Button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-x-6">
            {MenuItem.map((item) => (
              <li key={item.href} className="text-lg capitalize">
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
