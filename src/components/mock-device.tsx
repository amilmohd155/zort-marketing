import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const MockDevice = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "h-fit w-fit overflow-hidden rounded-2xl border-2 bg-gray-600",
        className,
      )}
    >
      {children}
    </div>
  );
};
