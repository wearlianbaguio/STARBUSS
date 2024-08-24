/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#00754A",
        secondary: "#D4E9E2",
        light: "#FFFFFF",
        dark: "#1E3932",
        black: "#000000",
        mint: "#F1F8F5",
        clay: "#F2F0EB",
        // tertiary: "#223c5f",
      },
      backgroundImage: {
        bgReward:
          "url('../img/455044342_1184467975940622_4744910648108961620_n.webp')",

        borderLink:
          "url('../img/456137707_1552605932304516_5451144727757624836_n.webp')",

        bgSecond:
          "url('../img/d4e9e2.png')",
      },
    },
  },
  plugins: [
    require('tailwindcss-border-image'),
  ],
};
