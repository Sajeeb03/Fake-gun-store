/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0cb718",

          "secondary": "#d35f45",

          "accent": "#4543b2",

          "neutral": "#211924",

          "base-100": "#E9EAEC",

          "info": "#73B2D4",

          "success": "#74E7C8",

          "warning": "#ECC94B",

          "error": "#EE7299",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
