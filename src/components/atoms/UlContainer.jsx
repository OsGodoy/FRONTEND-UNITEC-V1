import { twMerge } from "tailwind-merge";

export const UlContainerCenter = ({
  children,
  className = "",
  gap = "gap-1",
  ...props
}) => {
  return (
    <ul
      className={`flex flex-col items-start justify-center ${gap} ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
};

export const LiContainer = ({ children, className = "", ...props }) => {
  return (
    <li
      className={twMerge("items-center justify-between p-4 w-full", className)}
      {...props}
    >
      {children}
    </li>
  );
};

export const UlContainerGrid = ({ children, className = "", ...props }) => {
  return (
    <ul
      className={`grid md:grid-cols-2 items-center place-items-center md:gap-1 ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
};
