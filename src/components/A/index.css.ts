import { style } from "@vanilla-extract/css";
import {media, theme}  from "@theme";
import { fluid } from "@/styles/utils";
export const text = {
  a: style({
    marginInline: fluid(10,150),
    fontFamily: theme.fontFamily.nunito,
    fontWeight: '100',
    fontSize: theme.fontSize.xl,
    color: theme.color.white,
    backgroundColor: theme.color.green,
 

    '@media': {
      [media.md]: {
        backgroundColor: theme.color.red,
      },
    },
  }),
  b: style({
    fontFamily: theme.fontFamily.exo,
    fontSize: '3.5em',
    color: 'blue',
  }),
  c: style({
    fontFamily: theme.fontFamily.LibreFranklin,
    fontSize: '3.5em',
    color: 'green',
  }),
  d: style({
    fontFamily: theme.fontFamily.dancingScript,
    fontSize: '3.5em',
    color: 'green',
  }),
}