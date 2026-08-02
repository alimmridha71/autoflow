/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          900: '#001a40',
        },
        apple: {
          bg: '#000000',
          card: '#1c1c1e',
          cardLight: '#ffffff',
          textDark: '#f5f5f7',
          textLight: '#1d1d1f',
          accent: '#2997ff',
          gold: '#f5d061',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(41, 151, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
