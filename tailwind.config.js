/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#04060a',
          800: '#0b0d10',
          700: '#0f1114'
        },
        accent: {
          500: '#00bcd4',
          400: '#30d5c8',
          600: '#00a9b3'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"IBM Plex Sans"', 'Inter']
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, rgba(7,10,14,0.9) 0%, rgba(11,14,20,0.98) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
      }
    }
  },
  plugins: []
}
