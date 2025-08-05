/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#14b8a6",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      backgroundImage: {
        hero: "linear-gradient(to right, #4f46e5, #14b8a6)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [],
};
