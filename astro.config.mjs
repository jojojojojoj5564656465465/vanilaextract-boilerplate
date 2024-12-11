import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import qwikdev from '@qwikdev/astro'
import icon from 'astro-icon'

import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss'
    },
    plugins: [
      vanillaExtractPlugin({
        enabled: true
      })
    ],
    optimizeDeps: {
      noDiscovery: true,
      include: [] // Empty array instead of undefined
    }
  },
  integrations: [
    UnoCSS({
      injectReset: false
    }),
    qwikdev(),
    icon({ iconDir: 'src/assets/icons' }),
    robotsTxt()
  ]
})
