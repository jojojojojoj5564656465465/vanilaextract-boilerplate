import {theme} from '@theme'
import {
  defineConfig,
  presetTagify,
  presetWind,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import presetWindPlus from 'preset-wind-plus'
export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetWind(),
    presetWindPlus({
      maxScreenW: 1150,
      minScreenW: 320,
    }),
    //presetAttributify({ ignoreAttributes: ['block'] }),
    presetTagify(),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],

      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.husky',
        '.vscode',
        'public',
        'build',
        'mock',
        './stats.html',
      ],
    },
  },

  rules: [
    [
      'text-shadow',
      {
        'text-shadow':
          '-1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c, 1px 1px 1px #673b2c',
      },
    ],
  ],

  shortcuts: [
    {
      btn: 'focus:outline-none focus:(ring ring-offset-4 ring-4) inline m-0.25 font-semibold rounded-lg shadow-md cursor-pointer md:p-2-4',
    },

    [
      /^btn-(.*)$/,
      ([, color]) => {
        const defaultBtn =
          'p-3-9 active:rotate-2 font-semibold rounded-lg block border md:inline-block font-medium text-center focus:outline-none focus:ring'
        if (!color.includes('-')) {
          return `bg-${color} hover:bg-${color} focus:(rotate-1 bg-${color}) ${defaultBtn}`
        }
        const [c, d] = color.split('-')
        const e: string =
          ~~d > 500 ? (~~d - 200).toString() : (~~d + 200).toString()
        return `bg-${c}-${d} hover:bg-${c}-${e} focus:(rotate-1 bg-${c}-${e}) ${defaultBtn}`
      },
      { autocomplete: 'btn-$colors' },
    ],

    {
      container:
        'max-w-dvw px-1 relative 2xl:px-[calc(50%-(81rem/2))] xl:px-[calc(50%-(71rem/2))] xl:mx-auto box-border',
    },
    {
      'absolute-center': '-translate-1/2 left-1/2 top-1/2',
    },
    {
      'img-responsive': 'max-w-full h-auto mx-auto block',
    },

    {
      sss: 'outline-2 outline-offset-2 outline-dashed outline-green-300',
    },
  ],
  theme: {
    colors: {
     // hello:theme.color.green,
      text: {
        dark: '#212922',
        light: '#AEF6C7',
      },
    },

    fontFamily: {
      nunito: "'Nunito', serif",
      exo: "'exo', sans-serif",
      LibreFranklin: "'LibreFranklin', sans-serif",
      dancingScript: "'dancing', sans-serif",
    },
    fontSize: {
      cqi: ['clamp(0.60rem, .65cqi, .9cqi)', '1'],
      xs: ['clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)', '1'],
      sm: ['clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)', '1'],
      base: ['clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)', '1'],
      md: ['clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)', '1'],
      lg: ['clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)', '1'],
      xl: ['clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)', '1'],
      '2xl': ['clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)', '1'],
      '3xl': ['clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)', '1'],
      '4xl': ['clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)', '1'],
      '5xl': ['clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)', '1'],
      '6xl': ['clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)', '1'],
    },
    container: {
      center: true,
    },
    breakpoints: {
      xs: '280px',
      sm: '480px',
      md: '720px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
    },
    aspectRatio: {
      '4/3': '4 / 3',
      '1/3': '1 / 3',
      '1/2': '1 / 2',
    },
  },

  safelist: 'dark light prose prose-sm m-auto text-left'.split(' '),
})
