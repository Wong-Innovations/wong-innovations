import { useState } from "react";

const ProjectLink = (props) => (
  <li
    className={`hover:text-white cursor-pointer ${
      props.active ? "text-teal-400" : "text-zinc-400"
    }`}
    onClick={props.onClick}
  >
    {props.children}
  </li>
);

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projectInfo = [
    {
      name: "This Site",
      info: "This site was build with tailwind and react! The interactable cube at the top of the page was modeled in blender and imported into a ThreeJS scene. The background graphic was created in Adobe Illustrated.",
      links: [
        {
          text: "Source",
          href: "https://github.com/Wong-Innovations/wong-innovations",
        },
      ],
    },
    {
      name: "Nuxt-Mkdocs",
      info: "A nuxt-content based implementation of the mkdocs framework. Support for custom styles and components in the form of importable themes. Generate static docs from markdown or export your site to a nuxt-content app for even higher customization.",
      links: [
        {
          text: "Source",
          href: "https://github.com/Wong-Innovations/nuxt-mkdocs",
        },
        {
          text: "NPM",
          href: "https://www.npmjs.com/package/nuxt-mkdocs",
        },
      ],
    },
    {
      name: "GroovyScript",
      info: "Groovyscript is a Minecraft mod that allows other mod developers to modify the games, recipes, loot tables, items, and more. As a contributor to the opensource project I have written compats for several mods, worked on the system for creating items and blocks, as well as the ability to interface with loot tables.",
      links: [
        {
          text: "Source",
          href: "https://github.com/CleanroomMC/GroovyScript",
        },
        {
          text: "My Contributions",
          href: "https://github.com/CleanroomMC/GroovyScript/graphs/contributors",
        },
      ],
    },
    {
      name: "Flashcard App",
      info: "React native flashcard app that combines the multitude of testing methods such as multiple choice, free response, and fill in the blank. Additionally I implemented a spaced repetition algorithm for this app so the more you recall a card's answer correctly the less you get tested on it. This makes the app especially well suited for language learning.",
      links: [
        {
          text: "Source",
          href: "https://github.com/Wong-Innovations/Flashcard-App",
        },
      ],
    },
    {
      name: "CORE-Documents",
      info: "Node JS bindings for the CORE documents repository's API (a large collection of published research papers).",
      links: [
        {
          text: "Source",
          href: "https://github.com/Wong-Innovations/CORE-documents",
        },
        {
          text: "NPM",
          href: "https://www.npmjs.com/package/core-documents",
        },
      ],
    },
    {
      name: "Webmaster-API",
      info: "Node JS bindings for the bing webmaster api (Bing's version of google trends).",
      links: [
        {
          text: "Source",
          href: "https://github.com/Wong-Innovations/WebmasterAPI",
        },
        {
          text: "NPM",
          href: "https://www.npmjs.com/package/webmaster-api",
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="self-center mb-20 text-5xl underline underline-offset-32 decoration-teal-400">
        Projects
      </h2>
      <div className="flex p-16 bg-zinc-900 bg-opacity-75 max-w-5xl min-h-max lg:ml-0 ml-2">
        <div className="max-w-2xl">
          <h3 className="mb-4 text-2xl">{projectInfo[currentProject].name}</h3>
          <div className="border-l-2 border-l-teal-400 px-8">
            <p>{projectInfo[currentProject].info}</p>
            {projectInfo[currentProject].links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                className="mt-4 mr-4 ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:bg-gray-50 dark:text-gray-900 dark:bg-teal-400 dark:focus-visible:ring-gray-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="relative self-center min-w-40 px-4 pt-4 pb-6 before:clip-tl-corner after:clip-br-corner before:border-teal-400 after:border-teal-400">
          <ul>
            {projectInfo.map((proj, i) => (
              <ProjectLink
                key={i}
                active={i == currentProject}
                onClick={() => setCurrentProject(i)}
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
