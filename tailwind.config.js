/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
    },
  },
  plugins: [],
};
