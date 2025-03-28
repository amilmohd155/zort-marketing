import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const DownloadButton = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/apple_store.svg"
        width={200}
        height={200}
        alt="Get it on Apple Store"
        className={cn("aspect-auto w-40 md:w-30", className)}
      />
    </Link>
    // <div className="flex flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-5">

    //   <Link href="/">
    //     <Image
    //       src="/google_play.png"
    //       width={200}
    //       height={200}
    //       alt="Get it on Google Play"
    //       className={cn("aspect-auto w-40 md:w-30", className)}
    //     />
    //   </Link>
    // </div>
  );
};
