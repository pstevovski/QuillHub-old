import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility function for merging TailwindCSS classes preventing conflicts */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
