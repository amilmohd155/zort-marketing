import { cn } from "@/lib/utils";
import { useCallback } from "react";

export const MenuIcon = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const handleOnClick = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu-icon lucide-menu"
      onClick={handleOnClick}
    >
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
        className={cn(
          "origin-left transition",
          open && "-translate-y-1 rotate-45",
        )}
      />
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        className={cn("transition", open && "opacity-0")}
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
        className={cn(
          "origin-left transition",
          open && "translate-y-1 -rotate-45",
        )}
      />
    </svg>
  );
};
