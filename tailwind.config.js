/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "Sansation"],
      },
      colors: {
        primary: "#0D1164",
        secondary: "#F59E0B",
        accent: "#10B981",
        success: "#16a34a",
      },
    },
  },
  plugins: [],
};
