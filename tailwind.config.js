/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C00000',
        'primary-dark': '#7A0000',
        'silver': '#C0C0C0',
      },
    },
  },
  plugins: [],
}