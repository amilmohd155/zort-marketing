import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="my-10 h-px w-full bg-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"></div>
        <div className="py-20">
          <Image
            src="/logo.png"
            width={787}
            height={317}
            alt="Zort App Logo"
            className="aspect-auto w-20"
          />
        </div>
      </div>
    </footer>
  );
};
