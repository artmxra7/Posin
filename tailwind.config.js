/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "Sansation"],
      },
      translate: {
        "-1/2": "-50%",
      },
      transformOrigin: {
        top: "top", // Menambahkan transform-origin top
        bottom: "bottom", // Menambahkan transform-origin top
      },
      inset: {
        "100%": "100%", // Menambahkan nilai untuk left: 100%
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
