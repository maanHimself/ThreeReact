import { useRef, useEffect } from "react";

export default function ThreeApp({ app, style }) {
  const threeRootElement = useRef(null);

  useEffect(() => {
    new app(threeRootElement.current);
  }, []);

  return <div style={style} ref={threeRootElement} />;
}
