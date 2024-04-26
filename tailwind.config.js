/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunita: '"Nunito Sans", sans-serif'
      },
      themes: ["light", "synthwave"],
    },
  },
  plugins: [require("daisyui")],

}

