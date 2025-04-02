import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const DownloadButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_APP_STORE ?? "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/apple_store.svg"
        width={200}
        height={200}
        alt="Get it on Apple Store"
        className={cn("aspect-auto h-auto w-40", className)}
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
