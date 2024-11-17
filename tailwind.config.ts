import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b',
        gray: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 0.6s steps(1) infinite',
      },
    }
  },
};

export default config;
