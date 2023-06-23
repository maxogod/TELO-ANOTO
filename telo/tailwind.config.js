/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBarPurple: '#7D6F95',
        teloBlack: '#222222',
        teloWhite: '#D9D9D9',
        reservationPurple: '#7B38EA',
      },
      gradientColorStops: {
        purpleGradient: ['#08050D', '#1B0939', '#290B5B', '#46119E'],
      },
    },
  },
  plugins: [],
}

