/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
