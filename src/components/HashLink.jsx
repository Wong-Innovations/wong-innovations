import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const HashLink = (props) => {
  const location = useLocation();
  const lastHash = useRef("");
  const isAutoScrolling = useRef("");

  const scrollToHash = () => {
    if (location.hash) {
      lastHash.current = location.hash.split("?")[0];
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
  };

  const syncHashToScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll(`[id^="#"]`);

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        window.history.replaceState(
          null,
          null,
          section.id == "#home" ? "/" : section.id
        );
      }
    });
  };

  useEffect(() => {
    // window.addEventListener("scroll", syncHashToScroll);
    scrollToHash();
  }, []);

  return (
    <Link
      replace
      to={props.to}
      onClick={() => {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        scrollToHash();
      }}
    >
      {props.children}
    </Link>
  );
};

export default HashLink;
