import { Sketch } from "../threejs/ThreeApp";
import { useRunThreejs } from "../hooks/useThreejs";
export default function Home() {
  useRunThreejs({ ThreeClass: Sketch, selector: ".threeEl" });
  return (
    <>
      <p>this is a three js component</p>
      <div style={{ height: "500px", width: "700px" }} className="threeEl" />
    </>
  );
}
