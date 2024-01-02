import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HouseIcon from "../assets/house.svg?react";
import TimelineIcon from "../assets/timeline.svg?react";
import CodeIcon from "../assets/code.svg?react";
import PictureIcon from "../assets/picture.svg?react";
import MailIcon from "../assets/mail.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";
import ScrollToAnchor from "./ScrollToAnchor";

const Nav = () => {
  const location = useLocation();
  const [locale, setLocale] = useState("en");
  const [hash, setHash] = useState("");
  const { i18n } = useTranslation();

  const parseURL = () => {
    setHash("");
    setLocale("");
    if (!location.hash) {
      if (location.search) {
        setLocale(new URLSearchParams(location.search).get("locale"));
      }
    } else {
      let afterRoute = location.hash.split("?");

      setHash(afterRoute[0]);

      if (afterRoute.length > 1) {
        setLocale(new URLSearchParams(afterRoute[1]).get("locale"));
      }
    }
  };

  useEffect(() => {
    parseURL();
  }, []);

  useEffect(() => {
    window.history.replaceState(
      null,
      null,
      location.pathname + hash + (locale.length > 0 ? `?locale=${locale}` : "")
    );
  }, [hash]);

  useEffect(() => {
    i18n.changeLanguage(locale.length > 0 ? locale : "en");
    window.history.replaceState(
      null,
      null,
      `/${hash}${locale.length > 0 ? `?locale=${locale}` : ""}`
    );
  }, [locale]);

  return (
    <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-between bg-zinc-900 h-screen p-4">
      <div className="flex flex-col items-center space-y-1">
        <span
          onClick={() => {
            setLocale("");
          }}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            !locale ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          EN
        </span>
        <span
          onClick={() => {
            setLocale("jp");
          }}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            locale.toLowerCase() == "jp" ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          JP
        </span>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <span onClick={() => setHash("")}>
          <HouseIcon
            className={`w-6 h-6 hover:fill-white ${
              !hash ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Home</span>
        </span>
        <span onClick={() => setHash("#timeline")}>
          <TimelineIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#timeline" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">About</span>
        </span>
        <span onClick={() => setHash("#code")}>
          <CodeIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#code" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Code</span>
        </span>
        <span onClick={() => setHash("#gallery")}>
          <PictureIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#gallery" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Gallery</span>
        </span>
        <span onClick={() => setHash("#contact")}>
          <MailIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#contact" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Contact Me</span>
        </span>
      </nav>
      <div className="flex flex-col items-center space-y-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/dylanwong886/"
        >
          <InstagramIcon className="w-5 h-5 fill-zinc-500 hover:fill-white" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/wong-innovations/"
        >
          <LinkedInIcon className="w-5 h-5 fill-zinc-500 hover:fill-white" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Wong-Innovations"
        >
          <GithubIcon className="w-5 h-5 stroke-zinc-500 hover:stroke-white" />
          <span className="sr-only">Github</span>
        </a>
      </div>
      <ScrollToAnchor hash={hash} />
    </div>
  );
};

export default Nav;
