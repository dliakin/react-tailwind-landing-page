/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": [
          "54px",
          {
            lineHeight: "70.2px",
          },
        ],
      },
    },
  },
  plugins: [],
};
