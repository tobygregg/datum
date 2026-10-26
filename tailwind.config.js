/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        // Datum navy — logo lettering (#0b3369 detected in profile picture)
        navy: { DEFAULT: '#0b3369', dark: '#07224a', light: '#1d4f94' },
        // Pale steel blue — logo secondary tones (#95a9b8 / #d8e3ea)
        steel: { DEFAULT: '#95a9b8', pale: '#d8e3ea', mist: '#eef3f7' },
        // Copper/orange — expansion vessels in the cover photo; accent for buttons
        copper: { DEFAULT: '#c2410c', dark: '#9a3412', light: '#f97316' },
        ink: '#0f172a'
      },
      fontFamily: {
        heading: ['"Barlow Semi Condensed"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
