import { useTranslation } from "react-i18next";

import LeftArrowIcon from "../assets/left-arrow.svg?react";
import RightArrowIcon from "../assets/right-arrow.svg?react";

const Profile = () => {
  const { t } = useTranslation();

  // {
  //   icon: null,
  //   title: "",
  //   content: ""
  // }

  const cards = [
    {
      icon: null,
      title: "Frontend",
      content: "",
    },
    {
      icon: null,
      title: "Backend",
      content: "",
    },
    {
      icon: null,
      title: "CI",
      content: "",
    },
    {
      icon: null,
      title: "Languages",
      content: "",
    },
  ];

  return (
    <>
      <h2 className="self-center my-20 text-4xl">{t("skills")}</h2>
      <div className="flex flex-grow justify-between items-center mb-20">
        <div className="group flex flex-grow h-96 justify-start items-center pl-2">
          <LeftArrowIcon className="w-12 h-12 fill-zinc-500 group-hover:fill-teal-400" />
        </div>
        <div className="flex space-x-8">
          {cards.map(({ icon, title, content }) => (
            <div
              key={title}
              className="flex flex-col w-64 h-96 rounded overflow-hidden shadow-lg bg-gray-50 text-zinc-900"
            >
              {icon}
              <h3 className="text-2xl self-center">{title}</h3>
            </div>
          ))}
        </div>
        <div className="group flex flex-grow h-96 justify-end items-center">
          <RightArrowIcon className="w-12 h-12 fill-zinc-500 group-hover:fill-teal-400" />
        </div>
      </div>
    </>
  );
};

export default Profile;
