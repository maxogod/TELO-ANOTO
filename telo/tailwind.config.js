/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBarPurple: '#7D6F95',
      },
      gradientColorStops: {
        purpleGradient: ['#08050D', '#1B0939', '#290B5B', '#46119E'],
      },
    },
  },
  plugins: [],
}

