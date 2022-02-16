import { useEffect, useRef } from "react";

export const useThree = (ThreeClass) => {
  const canvas = useRef(null);
  useEffect(() => {
    new ThreeClass(canvas.current);
  }, []);
  return canvas;
};
