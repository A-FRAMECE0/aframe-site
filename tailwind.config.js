/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: '#6D071A',
        cream: '#F4F1EA',
        gold: '#C9A84C',
        dark: '#1E0A0D',
        mid: '#6B4E53',
        border: '#DDD5C8',
        lite: '#F9F7F2',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
    },
  },
  plugins: [],
}
