/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      maxWidth: {
        "50p": "50%",
      },
    },
  },
  plugins: [],
};
