import ThreeApp from "../threejs/ThreeApp";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    new ThreeApp({ selector: ".threejs" });
    //or you can use new ThreeApp({})
    //it will create a new element and append it to the document.body
  }, []);

  return (
    <>
      <div className="threejs" style={{ height: "100vh" }} />
    </>
  );
}
