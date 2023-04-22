/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
