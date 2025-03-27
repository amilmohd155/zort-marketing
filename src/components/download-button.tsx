import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const DownloadButton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-5">
      <Link href="/">
        <Image
          src="/apple_store.svg"
          width={200}
          height={200}
          alt="Get it on Apple Store"
          className="aspect-auto w-50 md:w-32"
        />
      </Link>
      <Link href="/">
        <Image
          src="/google_play.png"
          width={200}
          height={200}
          alt="Get it on Google Play"
          className="aspect-auto w-50 md:w-34"
        />
      </Link>
    </div>
  );
};
