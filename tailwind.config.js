/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
        "9/10": "90%",
      },
      maxHeight: {
        "1/2": "50%",
        "screen-1/2": "50vh",
      },
      minHeight: {
        "1/2": "50%",
        "screen-1/2": "50vh",
      },
      textUnderlineOffset: {
        32: "32px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
