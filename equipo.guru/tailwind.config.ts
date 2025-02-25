import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      // Custom colors
      colors: {
        'green-guru': '#E1FF2D',
        'black-guru': '#000',
        'white-guru': '#fff',
        'white-shades': {
          50: '#808080',
          55: '#8C8C8C',
          60: '#999999',
          65: '#A6A6A6',
          70: '#B3B3B3',
          75: '#BFBFBF',
          80: '#CCCCCC',
          85: '#E6E6E6',
        },
        'grey-shades': {
          6: '#0F0F0F',
          10: '#1A1A1A',
          12: '#1F1F1F',
          15: '#262626',
          20: '#333333',
          25: '#404040',
          30: '#ACACAC',
          40: '#666666',
          50: '#403F3F',
          60: '#808080',

        },
        'border-shades': {
          1: '#262626',
        }
      },
      // Custom fonts
      fontFamily: {
        'guru': ['Space Grotesk', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
      // Custom screen breakpoints
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config