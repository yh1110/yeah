/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mb: "0px", // mdを変更
        tb: "580px", // lgを変更
        dt: "1200px", // xlを変更
      },
      colors: {
        primary: {
          100: "#2f2f2f",
          300: "#171717",
          500: "#121212",
        },
        secondary: {
          100: "#006239",
          200: "#287150",
          300: "#3ECF8E",
        },
        text: {
          100: "#F3F3F3",
          200: "#d4d4d4",
          300: "#A6A6A6",
        },
        border: {
          200: "#2f2f2f",
          300: "#3f3f3f",
        },
        tag: {
          100: "#3ECF8E",
        },
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: 1 },
          "40%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "fade-out": "fade-out 4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
