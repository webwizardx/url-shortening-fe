import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'boost-desktop': "url('/img/bg-boost-desktop.svg')",
        'boost-mobile': "url('/img/bg-boost-mobile.svg')",
        'shorten-desktop': "url('/img/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/img/bg-shorten-mobile.svg')",
      },
      colors: {
        wzurl: {
          'dark-violet': '#3b3054',
          cyan: '#2acfcf',
          gray: {
            DEFAULT: '#bfbfbf',
            100: '#eff1f7',
          },
          red: '#f46262',
          'grayish-violet': '#9e9aa7',
          'very-dark-blue': '#35323e',
          'very-dark-violet': '#232127',
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
