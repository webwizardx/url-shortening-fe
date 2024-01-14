import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wzurl: {
          'dark-violet': '#3b3054',
          cyan: '#2acfcf',
          gray: '#bfbfbf',
          red: '#f46262',
          'grayish-violet': '#9e9aa7',
          'very-dark-blue': '#35323e',
          'very-dark-violet': '#232127',
        },
      },
    },
  },
  plugins: [],
};
export default config;
