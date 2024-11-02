/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./index.html",  
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
