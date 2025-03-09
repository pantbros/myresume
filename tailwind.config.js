/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 5s ease-in-out infinite', // Applying the rotate animation
      },
      keyframes: {
        tilt: {
          '0%': { transform: 'rotate(11.163deg)' },
          '50%': { transform: 'rotate(-11.163deg)' },
          '100%': { transform: 'rotate(11.163deg)' },
        },
      },
    },
  },
  plugins: [],
}

