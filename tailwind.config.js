/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      white: '#fefefe',
      black: '#333333',
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
