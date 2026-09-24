/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        basetheme: {
          primary: "#823f80",

          secondary: "#dfc1ce",

          accent: "#c4b5fd",

          neutral: "#f8eef9",

          "base-100": "#fcf7fc",

          info: "#bae6fd",

          success: "#6ee7b7",

          warning: "#fecaca",

          error: "#fda4af",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
