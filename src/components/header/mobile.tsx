import Link from "next/link";
import { DownloadButton } from "../buttons";
import { menuItems } from "@/data";

const MobileNav = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <ul className="flex flex-col">
        {menuItems
          .filter((item) => item.type === "internal")
          .map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block py-3 text-center capitalize active:bg-black/50"
                onClick={onClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
      <section
        aria-label="Social Links"
        className="flex flex-row items-center justify-center gap-x-2 py-2"
      >
        {menuItems
          .filter((item) => item.type === "social")
          .map(({ href, label, icon: Icon }) => (
            <Link
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="text-2xl" />
            </Link>
          ))}
      </section>
      <div className="mx-auto mt-1 h-px w-1/2 bg-white/10" />
      <section
        aria-label="Download App"
        className="flex flex-col items-center gap-y-2 pt-2 pb-5"
      >
        <span className="text-primary">Get the app</span>
        <DownloadButton className="w-30" />
      </section>
    </>
  );
};

export default MobileNav;
