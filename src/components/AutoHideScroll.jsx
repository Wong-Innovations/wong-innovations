import { useEffect } from "react";

const AutoHideScroll = () => {
  let scrollTimeout;

  useEffect(() => {
    document.getElementById("hide-scroll").disabled = false;
    window.onscroll = () => {
      document.getElementById("hide-scroll").disabled = true;
    };
    window.onscrollend = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.getElementById("hide-scroll").disabled = false;
      }, 1000);
    };
  }, []);

  return <></>;
};

export default AutoHideScroll;
