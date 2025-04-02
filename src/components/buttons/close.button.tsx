"use client";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const CloseButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("group cursor-pointer rounded-full md:size-12", className)}
      onClick={onClick}
    >
      <X className="size-5 transition-transform duration-200 group-hover:rotate-180 md:size-8" />
    </Button>
  );
};
