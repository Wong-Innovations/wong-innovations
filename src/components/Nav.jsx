import { useSearchParams, useLocation } from "react-router-dom";

import HouseIcon from "../assets/house.svg?react";
import TimelineIcon from "../assets/timeline.svg?react";
import CodeIcon from "../assets/code.svg?react";
import PictureIcon from "../assets/picture.svg?react";
import MailIcon from "../assets/mail.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";

const Nav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-between bg-zinc-900 h-screen p-4">
      <div className="flex flex-col items-center space-y-1">
        <p
          onClick={() => setSearchParams({ locale: "en" })}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            !searchParams.get("locale") ||
            searchParams.get("locale").toLowerCase() == "en"
              ? "text-teal-400"
              : "text-zinc-500"
          }`}
        >
          EN
        </p>
        <p
          onClick={() => setSearchParams({ locale: "jp" })}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            searchParams.get("locale") &&
            searchParams.get("locale").toLowerCase() == "jp"
              ? "text-teal-400"
              : "text-zinc-500"
          }`}
        >
          JP
        </p>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <a
          href={
            !searchParams.get("locale") ||
            searchParams.get("locale").toLowerCase() == "en"
              ? "/"
              : "/?locale=jp"
          }
        >
          <HouseIcon
            className={`w-6 h-6 hover:fill-white ${
              !location.hash ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Home</span>
        </a>
        <a href="#about">
          <TimelineIcon
            className={`w-6 h-6 hover:fill-white ${
              location.hash && location.hash == "#about"
                ? "fill-teal-400"
                : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">About</span>
        </a>
        <a href="#code">
          <CodeIcon
            className={`w-6 h-6 hover:fill-white ${
              location.hash && location.hash == "#code"
                ? "fill-teal-400"
                : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Code</span>
        </a>
        <a href="#gallery">
          <PictureIcon
            className={`w-6 h-6 hover:fill-white ${
              location.hash && location.hash == "#gallery"
                ? "fill-teal-400"
                : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Gallery</span>
        </a>
        <a href="#contact">
          <MailIcon
            className={`w-6 h-6 hover:fill-white ${
              location.hash && location.hash == "#contact"
                ? "fill-teal-400"
                : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Contact Me</span>
        </a>
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
