import { useEffect } from "react";

export const useRunThreejs = ({ selector, ThreeClass }) => {
  useEffect(() => {
    let el;
    if (selector) {
      el = document.querySelector(selector);
    } else {
      el = document.createElement("div");
      el.style.height = "100vh";
      document.body.appendChild(el);
    }
    new ThreeClass(el);
  }, []);
};
