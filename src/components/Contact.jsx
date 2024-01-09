import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleContactSubmit = (event) => {
      console.log("submitted...");
      document.getElementById("contact-form").reset();
      event.preventDefault();
    };
    document
      .getElementById("contact-form")
      .addEventListener("submit", handleContactSubmit);
    return () =>
      document
        .getElementById("contact-form")
        .removeEventListener("submit", handleContactSubmit);
  }, []);

  return (
    <>
      <h2 className="self-center mb-20 text-5xl underline underline-offset-32 decoration-teal-400 uppercase">
        {t("contact_me")}
      </h2>
      <form
        id="contact-form"
        className="flex flex-col w-1/2 space-y-1.5 self-center"
      >
        <input
          name="name"
          placeholder={t("contact_pl_name")}
          required
          className="bg-zinc-900 h-10 pl-4"
        />
        <input
          name="email"
          placeholder={t("contact_pl_email")}
          required
          className="bg-zinc-900 h-10 pl-4"
        />
        <input
          name="subject"
          placeholder={t("contact_pl_subject")}
          className="bg-zinc-900 h-10 pl-4"
        />
        <textarea
          name="message"
          placeholder={t("contact_pl_message")}
          required
          className="bg-zinc-900 pl-4 pt-2 min-h-48"
        />
        <button
          type="submit"
          className="bg-teal-400 h-10 px-4 py-2 placeholder-white"
        >
          {t("submit")}
        </button>
        {/* <div className="flex flex-grow justify-between"></div> */}
      </form>
    </>
  );
};

export default Contact;
