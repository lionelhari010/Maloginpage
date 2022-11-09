/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryLightBlue: "hsl(205, 79%, 92%)",
        veryLightBlueGray: "hsl(210, 36%, 96%)",
      },
    },
  },
  plugins: [],
};
