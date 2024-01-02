import { useEffect } from "react";

const AutoHideScroll = () => {
  let scrollendTimeout;

  useEffect(() => {
    // initially disable css that hides scrollbar
    document.getElementById("hide-scroll").disabled = false;
    // listen for scroll events
    window.addEventListener("scroll", () => {
      document.getElementById("hide-scroll").disabled = true;
      clearTimeout(scrollendTimeout);
      scrollendTimeout = setTimeout(() => {
        document.getElementById("hide-scroll").disabled = false;
      }, 1000);
    });
  }, []);

  return null;
};

export default AutoHideScroll;
