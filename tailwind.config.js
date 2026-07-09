/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0B1A2E',
          soft: '#142B49',
        },
        gold: {
          DEFAULT: '#C6A15B',
          soft: '#DCC28B',
        },
        paper: {
          DEFAULT: '#F7F2E7',
          dim: '#EFE7D6',
        },
        ink: {
          DEFAULT: '#1B2330',
          soft: '#4B5566',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        ui: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1120px',
      },
    },
  },
  plugins: [],
}
