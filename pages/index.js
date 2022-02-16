import ThreeApp from "../threejs/ThreeApp";
import { useLayoutEffect } from "react";
import { useThree } from "../hooks/useThree";

export default function Home() {
  //The argument for useThree is your threejs main class
  const canvas = useThree(ThreeApp);

  return (
    <>
      <div ref={canvas} style={{ height: "100vh" }} />
    </>
  );
}
