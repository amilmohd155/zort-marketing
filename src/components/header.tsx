import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-[#121212cc] px-4 py-5">
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
        <nav className="hidden">
          {/* <ul>
            <li className="text-foreground">Feature</li>
            <li>How it works</li>
            <li>Support</li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
};
