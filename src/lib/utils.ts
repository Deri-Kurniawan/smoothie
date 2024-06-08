import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomValue(maxRange: number) {
  const randomValue = Math.floor(Math.random() * maxRange + (maxRange + 1)); // 361 untuk inklusif 360
  const sign = Math.random() < 0.5 ? -1 : 1;
  return randomValue * sign;
}
