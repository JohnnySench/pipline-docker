/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,pcss}"],
  theme: {
    extend: {
      transitionProperty: {
        'left-right': 'left, right',
      },
      keyframes: {
        'left-to-right': {
          '0%': { left: '0', right: 'auto' },
          '100%': { left: 'auto', right: '0' },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 1s linear forwards',
      },
    },
  },
  plugins: [],
};
