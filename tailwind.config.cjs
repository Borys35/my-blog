/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#113BAE",
        primary: "#E74032",
        bg: {
          DEFAULT: "#FDFFFF",
          darker: "#ECF0F0",
        },
      },
      fontFamily: {
        sans: "Poppins",
      },
    },
  },
  plugins: [],
};
