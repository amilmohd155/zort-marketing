import { cn } from "@/lib/utils";

export const MockDevice = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[400px] w-[200px] rounded-2xl border-2 bg-gray-600",
        className,
      )}
    />
  );
};
