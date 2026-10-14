/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B1A4A",
        primaryLight: "#A83060",
        secondary: "#F5E6EC",
        accent: "#D4A0B5",
        brandText: "#2D2D2D",
        brandBg: "#FAFAFA",
        secondaryBrown: "#8B1A4A", // compatibilidade com classes antigas
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
