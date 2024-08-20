/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#00754A",
        secondary: "#D4E9E2",
        light: "#FFFFFF",
        dark: "#1E3932",
        // tertiary: "#223c5f",
      },
    },
  },
  plugins: [],
};
