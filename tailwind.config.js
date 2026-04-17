/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#EF4444',
        },
        orange: {
          500: '#FF8C42',
        },
        gray: {
          900: '#1F2937',
        },
      },
    },
  },
  plugins: [],
};
