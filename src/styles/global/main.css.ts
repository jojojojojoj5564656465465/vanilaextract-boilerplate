import { style } from '@vanilla-extract/css'
import {media} from '@theme'

/* layer: shortcuts */
export const container = style({
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: '100%',
  paddingInline: '0.25rem',
  height: 'fit-content',
  overflowY: 'hidden',
  scrollbarWidth: 'none',

  '@media': {
    [media.xl]: {
      maxWidth: '71rem',
      marginInline: 'auto',
      paddingInline: '0',
    },
    [media['2xl']]: {
      maxWidth: '81rem',
      marginInline: 'auto',
      paddingInline: '0',
    },
  },
})
