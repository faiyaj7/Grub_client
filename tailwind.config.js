/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        anton: ["Anton", "sans-serif"],
        merriweatherSans: ["Merriweather Sans", "sans-serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
