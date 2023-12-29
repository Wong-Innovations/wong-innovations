import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.split("?")[0].slice(1); // safe hash for further use after navigation
    } else {
      setTimeout(() => scrollTo({ top: 0, behavior: "smooth" }));
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;