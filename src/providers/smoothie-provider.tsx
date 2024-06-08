import { useState } from "react";
import { Smoothie, smoothieContext } from "../hooks/use-smoothie";

interface SmoothieProviderProps {
  children: React.ReactNode;
  smoothies: Smoothie[];
}

export const SmoothieProvider: React.FC<SmoothieProviderProps> = ({
  children,
  smoothies: smoothiesProp = {} as Smoothie[],
}) => {
  const [smoothies, setSmoothies] = useState<Smoothie[]>(smoothiesProp);
  const [smoothie, setSmoothie] = useState<Smoothie>(
    smoothiesProp[0] as Smoothie
  );

  return (
    <smoothieContext.Provider
      value={{ smoothies, smoothie, setSmoothies, setSmoothie }}
    >
      {children}
    </smoothieContext.Provider>
  );
};
