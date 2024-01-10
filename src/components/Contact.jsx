import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [disabled, setDisabled] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    toast
      .promise(
        emailjs.sendForm(
          "service_8i1z28a",
          "template_wp02lwp",
          formRef.current,
          "sXS-F9-BkXuxR6cSC"
        ),
        {
          loading: "Sending...",
          success: "Sent!",
          error: "Error!",
        }
      )
      .then(() => {
        document.getElementById("contact-form").reset();
        setDisabled(false);
      });
  };

  return (
    <>
      <h2 className="self-center mb-20 text-5xl underline underline-offset-32 decoration-teal-400 uppercase">
        {t("contact_me")}
      </h2>
      <form
        id="contact-form"
        ref={formRef}
        onSubmit={handleContactSubmit}
        className="flex flex-col w-1/2 space-y-1.5 self-center mb-16"
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
          disabled={disabled}
          className="bg-teal-400 h-10 px-4 py-2 placeholder-white"
        >
          {t("submit")}
        </button>
        <a href="mailto:wong.innovations@gmail.com">
          <div className="relative group flex py-16 items-center">
            <div
              id="left-line"
              className="flex-grow border-t [border-image:linear-gradient(to_right,transparent,#6b7280)_1] group-hover:[border-image:linear-gradient(to_right,transparent,#f9fafb)_1]"
            ></div>
            <span className="flex-shrink mx-4 text-gray-400 group-hover:text-gray-50">
              wong.innovations@gmail.com
            </span>
            <div
              id="right-line"
              className="flex-grow border-t [border-image:linear-gradient(to_left,transparent,#6b7280)_1] group-hover:[border-image:linear-gradient(to_left,transparent,#f9fafb)_1]"
            ></div>
          </div>
        </a>
      </form>
      <Toaster />
    </>
  );
};

export default Contact;
