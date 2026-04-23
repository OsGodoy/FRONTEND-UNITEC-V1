import clsx from "clsx";

export const scaleFx = (size = "sm") =>
  clsx("cursor-pointer transition-transform duration-150", {
    "hover:scale-102": size === "xs",
    "hover:scale-105": size === "sm",
    "hover:scale-110": size === "md",
  });

const bgVariants = {
  "neutral-700": "hover:bg-neutral-700",
  "emerald-500": "hover:bg-emerald-500/30",
  "rose-500": "hover:bg-rose-500/30",
};

export const hoverBgFx = (variant = "neutral-700") =>
  clsx("cursor-pointer transition-colors duration-150", bgVariants[variant]);
