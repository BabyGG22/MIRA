import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        void: '#07071A',
        navy: '#0D1240',
        indigo: '#1B2FA8',
        sky: '#38BDF8',
        snow: '#E2E8F0',
        muted: '#64748B',
        surface: '#0F1535',
      },
    },
  },
  plugins: [],
}

export default config
