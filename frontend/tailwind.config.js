/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0C0F",
        secondary: "#1A161F",
        third: "#261F30",
        black: "#4C4C4C",
      },
    },
  },
  plugins: [],
};
