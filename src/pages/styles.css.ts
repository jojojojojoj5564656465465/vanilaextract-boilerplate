import {
  globalStyle,
  style,
} from "@vanilla-extract/css";

import { theme } from "../styles/tokens/theme.css";
import "src/styles/global/globalStyle.css";    // importer les globals
import "src/styles/tokens/font/fontFamilies.css.ts";
import "src/styles/global/reset.css.ts";
//import { fontSizes } from "../styles/tokens/font/fontSizes";
import { media } from "../styles/global/globalStyle.css";
import { hoverfn } from "../styles/utils";

export const bb = style({
  backgroundColor: "pink",
  color: "black",
  selectors: {
    "&:hover": {
      backgroundColor: "yellow",
      "@media": {
        [media.md]: {
          backgroundColor: "green",
        },
        [media.lg]: {
          backgroundColor: "orange",
        },
      },
    },
  },
});
export const testDouble = style({
  color: "green",
  fontSize: "4.5rem",
  fontFamily:theme.fontFamily.Kalorama.Outline
});


export const cc = style(
  {
    backgroundColor: "pink",
    color: "blueviolet",
    fontFamily: theme.fontFamily.Kalorama.Outline,
    fontStyle: "normal",
    fontSize: "3.5rem",
    ...hoverfn({
      fontStyle: "italic",
      backgroundColor: "green",
      color: "yellow",
    }),
  },
  "cc class"
);



globalStyle("html", {
  fontFeatureSettings: "'cv02','cv03','cv04','cv11'",
  scrollBehavior: "smooth",
  scrollPaddingTop: 32,
  "@media": {
    [media.retina]: {
      scrollPaddingTop: 128,
    },
    [media.lg]: {
      color: "greenyellow",
    },
  },
});
