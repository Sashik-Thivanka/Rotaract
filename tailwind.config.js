
export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2472',
          50: '#EEF1FB',
          100: '#D4DCF5',
          200: '#A9B8EB',
          300: '#7A93DF',
          400: '#4A6DD1',
          500: '#0A2472',
          600: '#091E62',
          700: '#07184D',
          800: '#051138',
          900: '#030B24',
        },
        gold: {
          DEFAULT: '#C5A047',
          light: '#E4CC7F',
          dark: '#A17F2E',
        },
        cream: '#FBF8F3',
        ink: '#1A1420',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(10, 36, 114, 0.25)',
        glow: '0 0 40px -8px rgba(197, 160, 71, 0.5)',
        neu: '10px 10px 30px rgba(10,36,114,0.08), -10px -10px 30px rgba(255,255,255,0.9)',
      },
    },
  },
  plugins: [],
}

