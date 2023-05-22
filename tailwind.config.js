/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#7434CE',
        'secondary-color': '#f5f5f5',
        'color-gray': '#d9d9d9',
        'color-stars': '#57e32c',
      },
    },
  },
  plugins: [],
};
