import { menuItems } from "@/data";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const DesktopNav = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("hidden md:block", className)}>
      <ul className="flex flex-row items-center gap-x-6">
        {menuItems
          .filter((item) => item.type === "internal")
          .map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="capitalize">
                {item.label}
              </Link>
            </li>
          ))}
        {menuItems
          .filter((item) => item.type === "social")
          .map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="capitalize"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="text-2xl" aria-label={label} />
              </Link>
            </li>
          ))}
        <li className="py-3">
          <Link
            href={process.env.NEXT_PUBLIC_APP_STORE || "/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="default" size="lg">
              Download App
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
