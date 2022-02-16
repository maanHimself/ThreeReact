import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ThreeApp from "../components/ThreeContainer.js";
import app from "../threejs/ThreeApp";

export default function Home() {
  return (
    <>
      <ThreeApp app={app} style={{ height: "100vh" }}></ThreeApp>
    </>
  );
}
