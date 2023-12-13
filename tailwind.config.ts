import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        black: '#1B1B1E',
        gray: '#6D676E',
        light: '#E8EBE4',
        white: '#F4F9E9',
        pink: '#F9B3D1',
        rose: '#A26769',
        magenta: '#843B62',
        yellow: '#E1CA96',
        green: '#629460',
        blue: '#81ADC8',
      },
    },
  },
  plugins: [],
};

export default config;
