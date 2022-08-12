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
      maxWidth: {
        "screen-3xl": "1920px",
      },
      boxShadow: {
        card: "0px 5px 50px rgba(0, 0, 0, 0.07), 0px 24px 160px rgba(0, 0, 0, 0.05)",
        cardWithHeader: "0px 5px 20px rgba(0, 0, 0, 0.06), 0px 24px 160px rgba(0, 0, 0, 0.02)",
      },
      screens: {
        "1450px": "1450px",
      },
    },
  },
  plugins: [],
};
