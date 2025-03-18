/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-theme-clr':'#17c7bd',
      },
      server: {
        open: true,
      },
      animation: {
        loaderLeft: 'loaderLeft 0.5s linear forwards 0.9s',
        loaderRight: 'loaderRight 0.5s linear forwards 0.9s',
        tilt: 'tilt 5s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },        
      keyframes: {
        loaderLeft: {
          '0%': { width: '50%', opacity: '1' },
          '100%': { width: '0%', opacity: '0' },  // ✅ display: none hataya
        },
        loaderRight: {
          '0%': { width: '50%', opacity: '1' },
          '100%': { width: '0%', opacity: '0' },  // ✅ display: none hataya
        },
        tilt: {
          '0%': { transform: 'rotate(11.163deg)' },
          '50%': { transform: 'rotate(-11.163deg)' },
          '100%': { transform: 'rotate(11.163deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}