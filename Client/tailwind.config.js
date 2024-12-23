/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
