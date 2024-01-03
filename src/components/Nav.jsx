import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import HouseIcon from "../assets/house.svg?react";
import TimelineIcon from "../assets/timeline.svg?react";
import CodeIcon from "../assets/code.svg?react";
import PictureIcon from "../assets/picture.svg?react";
import MailIcon from "../assets/mail.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import GithubIcon from "../assets/github.svg?react";

const Nav = () => {
  const [hash, setHash] = useState("");
  const { i18n } = useTranslation();

  return (
    <div
      className="fixed inset-y-0 left-0 flex flex-col items-center justify-between bg-zinc-900 h-screen p-4"
      id="test"
    >
      <div className="flex flex-col items-center space-y-1">
        <span
          onClick={() => i18n.changeLanguage("en")}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            i18n.language == "en" ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          EN
        </span>
        <span
          onClick={() => i18n.changeLanguage("ja")}
          className={`text-sm hover:cursor-pointer hover:text-white ${
            i18n.language == "ja" ? "text-teal-400" : "text-zinc-500"
          }`}
        >
          JP
        </span>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <Link
          to="#home"
          spy
          hashSpy
          smooth
          duration={500}
          onSetActive={() => setHash("")}
        >
          <HouseIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Home</span>
        </Link>
        <Link
          to="#timeline"
          spy
          hashSpy
          smooth
          duration={500}
          onSetActive={() => setHash("#timeline")}
        >
          <TimelineIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#timeline" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">About</span>
        </Link>
        <Link
          to="#code"
          spy
          hashSpy
          smooth
          duration={500}
          onSetActive={() => setHash("#code")}
        >
          <CodeIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#code" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Code</span>
        </Link>
        <Link
          to="#gallery"
          spy
          hashSpy
          smooth
          duration={500}
          onSetActive={() => setHash("#gallery")}
        >
          <PictureIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#gallery" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Gallery</span>
        </Link>
        <Link
          to="#contact"
          spy
          hashSpy
          smooth
          duration={500}
          onSetActive={() => setHash("#contact")}
        >
          <MailIcon
            className={`w-6 h-6 hover:fill-white ${
              hash == "#contact" ? "fill-teal-400" : "fill-zinc-500"
            }`}
          />
          <span className="sr-only">Contact Me</span>
        </Link>
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
    </div>
  );
};

export default Nav;
