import { createThemeContract } from '@vanilla-extract/css'

import tokens from './tokens/index'
import { light } from 'src/styles/tokens/color/colors.ts'

export const theme = createThemeContract({
  fontSize: tokens.fontSizes,
  color: light,
  fontFamily: tokens.fontFamilies,
  size: tokens.sizes,
  space: tokens.spaces,
  radius: tokens.radii,
})
export const media = {
  mobile: {
    portrait: 'screen and (orientation: portrait) and (max-width: 26.875em)',
    landscape: 'screen and (orientation: landscape) and (max-height: 26.875em)',
  },
  tablet: {
    portrait:
      'screen and (orientation: portrait) and (27em <= width <= 52.02em)',
    landscape:
      'screen and (orientation: landscape) and (27em <= height <= 51em)',
  },
  md: 'screen and (hover: hover) and (min-width: 51em)',
  lg: 'screen and (min-width: 64em)',
  xl: 'screen and (min-width: 80em)',
  '2xl': 'screen and (min-width: 110em)',
  motionSafe: 'screen and (prefers-reduced-motion: no-preference)',
  retina: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)',
  dark: 'screen and (prefers-color-scheme: dark)',
} as const

 