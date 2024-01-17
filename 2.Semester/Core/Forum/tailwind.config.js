/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-background': '#292929',
      'dark-background-secondary': '#121212',
      'dark-background-tertiary': '#1f1f1f',
      'dark-primary': '#bb86fc',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [],
}