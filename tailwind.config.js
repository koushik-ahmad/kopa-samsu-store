/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e516bc",

          "secondary": "#86e8c2",

          "accent": "#2fbcac",

          "neutral": "#222C34",

          "base-100": "#E6E8EA",

          "info": "#AAB6EE",

          "success": "#115A54",

          "warning": "#BF980D",

          "error": "#EF3456",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
