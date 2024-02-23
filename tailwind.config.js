
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        thai: ['Noto Sans Thai', 'sans-serif'],
        mtsans: ['var(--font-inter)'],
        mtserif: ['var(--font-playfair)'],
        mtthai: ['var(--font-noto)'],
      },
    },
  },
  plugins: [nextui(),
  require("daisyui")]

}

