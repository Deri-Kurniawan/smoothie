import { createContext, useContext } from "react";

export interface Smoothie {
  id: number;
  name: string;
  description: string;
  image: string;
  imageFruitBase: string;
  benefits: string[];
  color: string;
  bgColor: string;
  fillColor: string;
}

export const smoothieContext = createContext<{
  smoothie: Smoothie;
  smoothies: Smoothie[];
  setSmoothie: React.Dispatch<React.SetStateAction<Smoothie>>;
  setSmoothies: React.Dispatch<React.SetStateAction<Smoothie[]>>;
}>({
  smoothie: {
    id: 0,
    name: "",
    description: "",
    image: "",
    imageFruitBase: "",
    benefits: [],
    color: "text-primary",
    bgColor: "bg-primary",
    fillColor: "fill-primary",
  } as Smoothie,
  smoothies: [],
  setSmoothie: () => {},
  setSmoothies: () => {},
});

export const useSmoothie = () => {
  const context = useContext(smoothieContext);
  if (!context) {
    throw new Error("useSmoothie must be used within a SmoothieProvider");
  }
  return context;
};
