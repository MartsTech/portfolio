/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(36,36,36)",
        accent: "#292929",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
