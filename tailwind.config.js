/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff7f9',
          100: '#ffedf3',
          200: '#ffdbe8',
          300: '#ffb9d4',
          400: '#ff86b4',
          500: '#f95493',
          600: '#e72d73',
          700: '#c51b58',
          800: '#a3194a',
          900: '#871a41',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        jp: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      animation: {
        'tile-flip': 'tileFlip 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'pop-in': 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        tileFlip: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0.3' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
