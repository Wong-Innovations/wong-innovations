import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";
import BriefcaseIcon from "../assets/briefcase.svg?react";
import GitPullIcon from "../assets/git-pull.svg?react";
import SchoolIcon from "../assets/school.svg?react";
import Chip from "./Chip";

const MyTimeline = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.setProperty(
      "--last-tl-element-height",
      `${document.getElementById("last-tl-element").clientHeight}px`
    );
  });

  const experience = [
    {
      date: `2021${t("year")} - ${t("present")}`,
      icon: <BriefcaseIcon />,
      chips: ["CI", "Java Spring", "Nuxt"],
      heading: t("devops_consultant"),
      subHeading: "OnCore Consulting",
      summary: t("oncore_summary"),
    },
    {
      date: `2019${t("year")} - 2020${t("year")}`,
      icon: <BriefcaseIcon />,
      chips: ["React", "Django"],
      heading: t("fullstack_intern"),
      subHeading: "Staff Fox",
      summary: t("fullstack_intern_summary"),
    },
    {
      date: `2022${t("year")} - ${t("present")}`,
      icon: <GitPullIcon />,
      chips: ["API", "Package"],
      heading: t("npm_dev"),
      subHeading: "core-documents, nuxt-mkdocs",
      summary: t("npm_dev_summary"),
    },
    {
      date: `2022${t("year")} - ${t("present")}`,
      icon: <GitPullIcon />,
      chips: ["Java Mixins"],
      heading: t("os_contributor"),
      subHeading: "CleanroomMC",
      summary: t("os_contributor_summary"),
    },
    {
      date: `2018${t("year")} - 2021${t("year")}`,
      icon: <SchoolIcon />,
      chips: [],
      heading: t("bs_math"),
      subHeading: "University of Nevada, Reno",
      summary: t("bs_math_summary"),
    },
    {
      date: t("november_2019"),
      icon: <SchoolIcon />,
      chips: ["Python"],
      heading: t("hackathon"),
      subHeading: "University of Nevada, Reno",
      summary: t("hackathon_summary"),
    },
  ];

  return (
    <VerticalTimeline
      key={props.darkMode ? "dark-tl" : "light-tl"}
      className="text-gray-100 dark:text-gray-900 my-12 py-0"
      lineColor={props.darkMode ? "#ffffff" : "#3f3f46"}
    >
      {experience.map((exp, i) => (
        <VerticalTimelineElement
          key={i}
          id={i == experience.length - 1 ? "last-tl-element" : null}
          textClassName={
            i == 0 ? "bg-teal-400 text-gray-900" : "bg-zinc-700 dark:bg-white"
          }
          date={exp.date}
          dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
          contentArrowStyle={{ display: "none" }}
          iconClassName="bg-teal-400 shadow-size-medium"
          icon={<exp.icon.type className="fill-zinc-700 dark:fill-white" />}
        >
          {exp.chips.map((chip, j) => (
            <Chip
              key={j}
              className={
                i == 0
                  ? "bg-gray-50 dark:bg-gray-50"
                  : "bg-teal-400 dark:bg-gray-900/20"
              }
            >
              {chip}
            </Chip>
          ))}
          <h2 className="vertical-timeline-element-title mt-2">
            {exp.heading}
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            {exp.subHeading}
          </h4>
          <p>{exp.summary}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default MyTimeline;
