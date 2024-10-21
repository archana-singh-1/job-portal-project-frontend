/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all JS and TS files in the src directory
    './public/index.html',         // Includes your main HTML file in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
