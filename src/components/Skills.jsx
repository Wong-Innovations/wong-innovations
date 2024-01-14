import { useDrag } from "react-use-gesture";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import classNames from "classnames";

import LeftArrowIcon from "../assets/left-arrow.svg?react";
import RightArrowIcon from "../assets/right-arrow.svg?react";
import WebsiteIcon from "../assets/website.svg?react";
import ServerIcon from "../assets/server.svg?react";
import CodingIcon from "../assets/computer-code.svg?react";
import CloudIcon from "../assets/cloud.svg?react";
import SoftwareIcon from "../assets/software.svg?react";
import EditorIcon from "../assets/editor.svg?react";

const SlickLeftArrow = ({ currentSlide, slideCount, className, ...props }) => {
  return (
    <div className="group">
      <LeftArrowIcon
        {...props}
        className={classNames(
          className,
          "w-16 h-16 fill-zinc-500 group-hover:fill-teal-400 z-50 -left-10"
        )}
      />
    </div>
  );
};

const SlickRightArrow = ({ currentSlide, slideCount, className, ...props }) => {
  return (
    <div className="group">
      <RightArrowIcon
        {...props}
        className={classNames(
          className,
          "w-16 h-16 fill-zinc-500 group-hover:fill-teal-400 -right-10"
        )}
      />
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <WebsiteIcon className="w-16 h-16 fill-gray-50" />,
      title: t("frontend"),
      content: t("frontend_skills"),
    },
    {
      icon: <ServerIcon className="w-16 h-16 fill-gray-50" />,
      title: t("backend"),
      content: t("backend_skills"),
    },
    {
      icon: <CloudIcon className="w-16 h-16 fill-gray-50" />,
      title: t("ci"),
      content: t("ci_skills"),
    },
    {
      icon: <CodingIcon className="w-16 h-16 fill-gray-50" />,
      title: t("languages"),
      content: t("language_skills"),
    },
    {
      icon: <SoftwareIcon className="w-16 h-16 fill-teal-400 stroke-gray-50" />,
      title: t("software"),
      content: t("software_skills"),
    },
    {
      icon: <EditorIcon className="w-16 h-16 fill-gray-50" />,
      title: t("editors"),
      content: t("editor_skills"),
    },
  ];

  return (
    <>
      <h2 className="self-center mb-20 text-5xl underline underline-offset-32 decoration-teal-400">
        {t("skills")}
      </h2>
      <div className="w-full max-w-9/10 justify-self-end self-center">
        <Slider
          infinite
          slidesToShow={6}
          arrows
          dots
          nextArrow={<SlickRightArrow />}
          prevArrow={<SlickLeftArrow />}
          responsive={[
            {
              breakpoint: 2400,
              settings: { slidesToShow: 5 },
            },
            {
              breakpoint: 1750,
              settings: { slidesToShow: 4 },
            },
            {
              breakpoint: 1536,
              settings: { slidesToShow: 3 },
            },
          ]}
        >
          {cards.map(({ icon, title, content }, i) => (
            <div key={i}>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={`${250 * i}`}
                className="flex flex-col w-64 h-96 rounded mx-auto overflow-hidden shadow-lg bg-gray-50 text-zinc-900"
              >
                <div className="self-center mb-4 mt-10 p-4 bg-teal-400 rounded-full">
                  {icon}
                </div>
                <h3 className="text-3xl self-center mb-2">{title}</h3>
                <p className="text-center leading-snug font-medium">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Skills;
