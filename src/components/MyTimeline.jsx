import React from "react";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";
import BriefcaseIcon from "../assets/briefcase.svg?react";
import GitPullIcon from "../assets/git-pull.svg?react";
import SchoolIcon from "../assets/school.svg?react";

const MyTimeline = () => {
  return (
    <VerticalTimeline className="text-gray-900 my-12 py-0">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        textClassName="bg-teal-400"
        date="2021 - present"
        dateClassName="dark:text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        iconClassName="bg-teal-400"
        icon={<BriefcaseIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">Devops Consultant</h2>
        <h4 className="vertical-timeline-element-subtitle">
          OnCore Consulting
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2020"
        dateClassName="dark:text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<BriefcaseIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">Fullstack Intern</h2>
        <h4 className="vertical-timeline-element-subtitle">Staff Fox</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022 - present"
        dateClassName="dark:text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<GitPullIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">CleanroomMC</h2>
        <h4 className="vertical-timeline-element-subtitle">
          Opensource Contributor
        </h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2021"
        dateClassName="dark:text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<SchoolIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">
          Bachelor of Science in Applied Mathematics
        </h2>
        <h4 className="vertical-timeline-element-subtitle">
          University of Nevada, Reno
        </h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2019"
        dateClassName="dark:text-zinc-200"
        contentArrowStyle={{ display: "none" }}
        contentStyle={{ borderTop: "3px solid #2dd4bf" }}
        iconClassName="bg-teal-400"
        icon={<SchoolIcon className="fill-white" />}
      >
        <h2 className="vertical-timeline-element-title">
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
