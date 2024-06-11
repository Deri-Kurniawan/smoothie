import { useEffect, useState } from "react";

/**
 * A custom hook that returns the width of the viewport
 * @returns {width} - The width of the viewport
 */
export const useViewport = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};
