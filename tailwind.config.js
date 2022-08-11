/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "54-70": [
          "54px",
          {
            lineHeight: "70.2px",
          },
        ],
      },
      fontFamily: {
        sans: ["GolosTextWebRegular", ...defaultTheme.fontFamily.sans],
        golos: ["GolosTextWebRegular"],
      },
      backgroundSize: {
        "55%": "55%",
      },
      backgroundPosition: {
        "bottom-10": "10rem bottom",
      },
    },
  },
  plugins: [],
};
