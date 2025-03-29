import { DownloadButton } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="my-10 h-px w-full bg-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
        <div className="px-4 pb-10">
          <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-[auto_1fr_auto]">
            <div className="order-3 flex flex-col items-center gap-y-2 md:order-1 md:items-start">
              <div className="block h-px w-1/2 bg-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:hidden" />

              <Image
                src="/logo.png"
                width={787}
                height={317}
                alt="Zort App Logo"
                className="aspect-auto w-20"
              />
              <h3 className="text-secondary/50 text-sm font-semibold text-nowrap md:text-base">
                A GIS Analytics app
              </h3>
              <h6 className="text-foreground/60 text-xs">
                © 2024 ZORT. All rights reserved.
              </h6>
            </div>
            <div className="text-foreground/80 order-1 flex flex-col gap-5 text-center text-xs font-light md:order-2 md:flex-row md:justify-around md:text-start lg:text-sm">
              <div className="flex flex-col gap-y-1.5">
                <p className="text-foreground text-sm font-semibold uppercase lg:text-base">
                  Company
                </p>
                <Link href="#features">Features</Link>
                <Link href="#how-it-works">How it works</Link>
                <Link href="#support">Support</Link>
              </div>

              <div className="space-y-2">
                <p className="text-foreground text-sm font-semibold uppercase">
                  Legal
                </p>
                <Link href="/">Terms and Conditions</Link>
              </div>
              <div className="space-y-2">
                <p className="text-foreground text-sm font-semibold uppercase">
                  Follow us on
                </p>
                <div className="flex flex-row items-center justify-center gap-x-3 text-2xl md:justify-start">
                  <Link href="/">
                    <FaInstagram />
                  </Link>
                  <Link href="/">
                    <FaTiktok />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-2 mx-auto space-y-2 text-center md:order-3 md:mx-0 md:text-start">
              <p className="text-primary text-sm font-semibold uppercase">
                Get the App
              </p>
              <DownloadButton className="w-30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
