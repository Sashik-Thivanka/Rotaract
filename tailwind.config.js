
export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8C1D40',
          50: '#FBEEF3',
          100: '#F4D3DF',
          200: '#E7A6BE',
          300: '#D7759B',
          400: '#BF4874',
          500: '#8C1D40',
          600: '#7A1838',
          700: '#5F132C',
          800: '#440E20',
          900: '#2C0915',
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
        soft: '0 20px 60px -20px rgba(140, 29, 64, 0.25)',
        glow: '0 0 40px -8px rgba(197, 160, 71, 0.5)',
        neu: '10px 10px 30px rgba(140,29,64,0.08), -10px -10px 30px rgba(255,255,255,0.9)',
      },
    },
  },
  plugins: [],
}

