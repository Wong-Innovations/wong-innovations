import React from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-start space-y-4 ml-16">
      <div>
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-32 w-32">
          <img
            className="aspect-square h-full w-full"
            alt="Dylan Wong"
            src="/img/portrait.png?height=128&amp;width=128"
          />
        </span>
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter mb-2 sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          {t("name")}
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-200">
          Fullstack Developer &amp; DevOps Consultant
        </p>
      </div>
      <div className="space-x-4">
        <button className="ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-teal-400 dark:focus-visible:ring-gray-300">
          View Portfolio
        </button>
        <button className="ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-teal-400 dark:focus-visible:ring-gray-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Profile;
