import { useEffect } from "react";

const ScrollToAnchor = (props) => {
  useEffect(() => {
    if (!props.hash) {
      setTimeout(() => scrollTo({ top: 0, behavior: "smooth" }));
    } else if (props.hash && document.getElementById(props.hash)) {
      setTimeout(() => {
        document
          .getElementById(props.hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [props.hash]);

  return null;
};

export default ScrollToAnchor;
