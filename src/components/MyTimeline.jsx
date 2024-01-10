import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";
import BriefcaseIcon from "../assets/briefcase.svg?react";
import GitPullIcon from "../assets/git-pull.svg?react";
import SchoolIcon from "../assets/school.svg?react";
import Chip from "./Chip";

const MyTimeline = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.setProperty(
      "--last-tl-element-height",
      `${document.getElementById("last-tl-element").clientHeight}px`
    );
  });

  return (
    <VerticalTimeline className="text-gray-900 my-12 py-0">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        textClassName="bg-teal-400"
        date={`2021${t("year")} - ${t("present")}`}
        dateClassName="dark:sm:!text-black dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        iconClassName="bg-teal-400"
        icon={<BriefcaseIcon className="fill-white" />}
      >
        <Chip className="!bg-gray-50">CI</Chip>
        <Chip className="!bg-gray-50">Java Spring</Chip>
        <Chip className="!bg-gray-50">Nuxt</Chip>
        <h2 className="vertical-timeline-element-title mt-2">
          {t("devops_consultant")}
        </h2>
        <h4 className="vertical-timeline-element-subtitle">
          OnCore Consulting
        </h4>
        <p>{t("oncore_summary")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={`2019${t("year")} - 2020${t("year")}`}
        dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<BriefcaseIcon className="fill-white" />}
      >
        <Chip>React</Chip>
        <Chip>Django</Chip>
        <h2 className="vertical-timeline-element-title mt-2">
          {t("fullstack_intern")}
        </h2>
        <h4 className="vertical-timeline-element-subtitle">Staff Fox</h4>
        <p>{t("fullstack_intern_summary")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--dev"
        date={`2022${t("year")} - ${t("present")}`}
        dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<GitPullIcon className="fill-white" />}
      >
        <Chip>API</Chip>
        <Chip>Package</Chip>
        <h2 className="vertical-timeline-element-title mt-2">{t("npm_dev")}</h2>
        <h4 className="vertical-timeline-element-subtitle">
          core-documents, nuxt-mkdocs
        </h4>
        <p>{t("npm_dev_summary")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--dev"
        date={`2022${t("year")} - ${t("present")}`}
        dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<GitPullIcon className="fill-white" />}
      >
        <Chip>Java Mixins</Chip>
        <h2 className="vertical-timeline-element-title mt-2">
          {t("os_contributor")}
        </h2>
        <h4 className="vertical-timeline-element-subtitle">CleanroomMC</h4>
        <p>{t("os_contributor_summary")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={`2018${t("year")} - 2021${t("year")}`}
        dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<SchoolIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">{t("bs_math")}</h2>
        <h4 className="vertical-timeline-element-subtitle">
          University of Nevada, Reno
        </h4>
        <p>{t("bs_math_summary")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        id="last-tl-element"
        className="vertical-timeline-element--education"
        date={t("november_2019")}
        dateClassName="dark:sm:!text-zinc-700 dark:lg:!text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<SchoolIcon className="fill-white" />}
      >
        <Chip>Python</Chip>
        <h2 className="vertical-timeline-element-title mt-2">
          ACM Hackathon 1st Place
        </h2>
        <p>Won colliegate hackathon with staff scheduling app submission.</p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon className="fill-white" />}
      /> */}
    </VerticalTimeline>
  );
};

export default MyTimeline;
