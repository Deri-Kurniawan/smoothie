import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a random value between -maxRange and maxRange
 * @param maxRange - The maximum range of the random value
 * @returns A random value between -maxRange and maxRange
 */
export function getRandomValue(maxRange: number = 10) {
  return Math.floor(Math.random() * (2 * maxRange + 1)) - maxRange;
}
