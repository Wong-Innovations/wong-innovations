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
  ];

  return (
    <>
      <h2 className="self-center my-20 text-4xl">{t("skills")}</h2>
      <div className="w-full xl:max-w-5xl md:max-w-4xl justify-self-end self-center">
        <Slider
          infinite
          slidesToShow={3}
          arrows
          dots
          nextArrow={<SlickRightArrow />}
          prevArrow={<SlickLeftArrow />}
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
