import { useEffect, useRef } from "react";

export const useThree = (ThreeClass) => {
  const container = useRef(null);
  useEffect(() => {
    if (!container.current) return;
    new ThreeClass(container.current);
  }, [container]);
  return container;
};
