/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      white: '#fefefe',
      black: '#333333',
      gray: '#C1C3C6',
    },
    color: {
      white: '#fefefe',
      black: '#333333',
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
