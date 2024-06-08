/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poiret-one": ["Poiret One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1260px",
        },
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        accent: "rgb(var(--color-accent))",
        "secondary-light-blue": "rgb(var(--color-secondary-light-blue))",
        "secondary-light-green": "rgb(var(--color-secondary-light-green))",
        "secondary-pink": "rgb(var(--color-secondary-pink))",
        "secondary-blue": "rgb(var(--color-secondary-blue))",
        "secondary-green": "rgb(var(--color-secondary-green))",
        "secondary-orange": "rgb(var(--color-secondary-orange))",
      },
    },
  },
  plugins: [],
};
