/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#F4D04E",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
