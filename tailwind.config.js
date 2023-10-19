/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#202733',
        green: '#53FFAA',
        'dark-advice': 'hsla(217, 19%, 24%, 1)',
        'grayish-blue': '#4F5D74',
      },
      fontSize: {
        // sm: '11px',
      },
      fontFamily: {
        manrope: ['Manrope', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
