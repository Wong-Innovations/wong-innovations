import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start space-y-4 sm:ml-16 ml-4">
      <div className="lg:block hidden">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-32 w-32">
          <img
            className="aspect-square h-full w-full"
            alt="Dylan Wong"
            src="./assets/portrait.png?height=128&amp;width=128"
          />
        </span>
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter mb-2 sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          {t("name")}
        </h1>
        <p className="mx-auto max-w-[700px] text-zinc-800 md:text-xl dark:text-gray-200">
          {t("roles")}
        </p>
      </div>
      <div className="space-x-4">
        <button
          onClick={() =>
            document
              .getElementById("#gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-teal-400 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:focus-visible:ring-gray-300"
        >
          {t("view_portfolio")}
        </button>
        <button
          onClick={() => scroll.scrollToBottom()}
          className="ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-teal-400 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:focus-visible:ring-gray-300"
        >
          {t("contact_me")}
        </button>
      </div>
    </div>
  );
};

export default Profile;
