import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectLink = (props) => (
  <li
    className={`hover:text-white cursor-pointer ${
      props.active ? "text-teal-400" : "text-zinc-300 dark:text-zinc-400"
    }`}
    onClick={props.onClick}
  >
    {props.children}
  </li>
);

const Projects = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);
  const projectInfo = [
    {
      name: t("projects_this_site"),
      info: t("projects_this_site_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/Wong-Innovations/wong-innovations",
        },
      ],
    },
    {
      name: t("projects_nuxt_mkdocs"),
      info: t("projects_nuxt_mkdocs_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/Wong-Innovations/nuxt-mkdocs",
        },
        {
          text: t("project_link_NPM"),
          href: "https://www.npmjs.com/package/nuxt-mkdocs",
        },
      ],
    },
    {
      name: t("projects_groovy"),
      info: t("projects_groovy_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/CleanroomMC/GroovyScript",
        },
        {
          text: t("project_link_contributions"),
          href: "https://github.com/CleanroomMC/GroovyScript/graphs/contributors",
        },
      ],
    },
    {
      name: t("projects_flashcard_app"),
      info: t("projects_flashcard_app_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/Wong-Innovations/Flashcard-App",
        },
      ],
    },
    {
      name: t("projects_core_docs"),
      info: t("projects_core_docs_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/Wong-Innovations/CORE-documents",
        },
        {
          text: t("project_link_NPM"),
          href: "https://www.npmjs.com/package/core-documents",
        },
      ],
    },
    {
      name: t("projects_webmaster"),
      info: t("projects_webmaster_description"),
      links: [
        {
          text: t("project_link_source"),
          href: "https://github.com/Wong-Innovations/WebmasterAPI",
        },
        {
          text: t("project_link_NPM"),
          href: "https://www.npmjs.com/package/webmaster-api",
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="self-center mb-20 text-5xl underline underline-offset-32 decoration-teal-400">
        {t("projects")}
      </h2>
      <div className="flex md:flex-row flex-col md:gap-0 gap-8 p-8 md:p-16 bg-zinc-800/90 dark:bg-zinc-900/75 text-zinc-50 max-w-5xl md:mr-0 mx-2">
        <div className="max-w-2xl">
          <h3 className="mb-4 text-2xl">{projectInfo[currentProject].name}</h3>
          <div className="border-l-2 border-l-teal-400 px-8">
            <p>{projectInfo[currentProject].info}</p>
            {projectInfo[currentProject].links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                className="mt-4 mr-4 ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 hover:bg-gray-50 text-gray-900 bg-teal-400 focus-visible:ring-gray-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="relative self-center min-w-40 md:w-auto w-full px-4 pt-4 pb-6 before:clip-tl-corner after:clip-br-corner before:border-teal-400 after:border-teal-400">
          <ul>
            {projectInfo.map((proj, i) => (
              <ProjectLink
                key={i}
                active={i == currentProject}
                onClick={() => {
                  console.log(i);
                  setCurrentProject(i);
                }}
              >
                {proj.name}
              </ProjectLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
