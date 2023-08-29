/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C51162',
        secondary: '#0FB7D3',
        text_color: '#413B70',
        text_info: '#0C63E7',
        text_light: '#E0D2FE',
        background_light: '#F4F4F4',
        background_dark: '#16182B',
        light: '#FFE8E9',
        shadow: '#5D6370',
      },
      width: {
        104: '26rem',
        112: '28rem',
        124: '32rem',
      },
      minWidth: {
        64: '16rem',
      },
      maxWidth: {
        64: '16rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        hero_pattern: "url('/src/assets/img/hero.webp')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#C51162',
          secondary: '#0FB7D3',
        },
      },
    ],
  },
}
