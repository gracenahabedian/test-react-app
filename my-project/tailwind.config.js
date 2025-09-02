/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#B2A1C7',
      },
      screens: {
        // sm: '480px',
        md: '860px',
        // lg: '976px',
        // xl: '1280px',
        // '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
