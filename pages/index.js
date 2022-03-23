import ThreeApp from "../threejs/ThreeApp";
import { useThree } from "../hooks/useThree";

export default function Home() {
  //The argument for useThree is your threejs main class
  const container = useThree(ThreeApp);
  return <div ref={container} style={{ height: "100vh" }} />;
}
