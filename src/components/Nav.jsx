import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import HouseIcon from "../assets/house.svg?react";
import TimelineIcon from "../assets/timeline.svg?react";
import CodeIcon from "../assets/code.svg?react";
import PictureIcon from "../assets/picture.svg?react";
import MailIcon from "../assets/mail.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";

const Nav = () => {
  const location = useLocation();
  const [locale, setLocale] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
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
  }, [location]);

  return (
    <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-between bg-zinc-900 h-screen p-4">
      <div className="flex flex-col items-center space-y-1">
        <Link
          reloadDocument
          to={location.pathname + hash}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            !locale ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          EN
        </Link>
        <Link
          reloadDocument
          to={location.pathname + hash + "?locale=jp"}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            locale.toLowerCase() == "jp" ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          JP
        </Link>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <Link to={"/" + (locale ? `?locale=${locale}` : "")}>
          <HouseIcon
            className={`w-6 h-6 hover:fill-white ${
              !hash ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Home</span>
        </Link>
        <Link to={"#timeline" + (locale ? `?locale=${locale}` : "")}>
          <TimelineIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#timeline" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">About</span>
        </Link>
        <Link to={"#code" + (locale ? `?locale=${locale}` : "")}>
          <CodeIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#code" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Code</span>
        </Link>
        <Link to={"#gallery" + (locale ? `?locale=${locale}` : "")}>
          <PictureIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#gallery" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Gallery</span>
        </Link>
        <Link to={"#contact" + (locale ? `?locale=${locale}` : "")}>
          <MailIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#contact" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Contact Me</span>
        </Link>
      </nav>
      <div className="flex flex-col items-center space-y-4">
        <a target="_blank" rel="noopener noreferrer" href="#">
          <InstagramIcon className="w-5 h-5 fill-zinc-500 hover:fill-white" />
          <span className="sr-only">Instagram</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="#">
          <LinkedInIcon className="w-5 h-5 fill-zinc-500 hover:fill-white" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="#">
          <GithubIcon className="w-5 h-5 stroke-zinc-500 hover:stroke-white" />
          <span className="sr-only">Github</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
