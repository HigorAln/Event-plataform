/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur-background.png)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        green: {
          300: "#00b373",
          500: "#00875f",
          700: "#015f43",
        },
        blue: {
          500: "#81d8f7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        }
      }
    },
  },
  plugins: [],
}
