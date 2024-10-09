/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#603F26",
        "primary-hover": "#472f1c",
        secondary: "#FFDBB5",
      },
    },
  },
  plugins: [],
};
