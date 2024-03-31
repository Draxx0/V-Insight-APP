/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#96F9F8',
        indigo: '#232A5C',
        'ice-cold': '#96F9F8',
        aquamarine: '#FF4655',
        white: '#FFFFFF',
        black: '#0F142B',
      },
      backgroundImage: () => ({
        'main-gradient':
          ' background: linear-gradient(179deg, rgba(15, 20, 43, 0.2) 1.09%, rgba(30, 40, 88, 0.2) 309.79%);',
        'auth-gradient':
          'linear-gradient(144deg, rgba(17,23,46,1) 0%, rgba(71,43,70,1) 100%);',
      }),
    },
  },
  plugins: [],
};
