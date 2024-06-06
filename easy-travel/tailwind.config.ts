import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0fdf8',
          '100': '#cdfaec',
          '200': '#9af5d8',
          '300': '#60e8c3',
          '400': '#30d1aa',
          '500': '#16b691',
          '600': '#0e886f',
          '700': '#117462',
          '800': '#125d4f',
          '900': '#144d42',
          '950': '#052e28',
        },
      },
    },
  },
  plugins: [],
};
export default config;
