import "../styles/globals.css";
import { useRunThreejs } from "../threejs/ThreeApp";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
