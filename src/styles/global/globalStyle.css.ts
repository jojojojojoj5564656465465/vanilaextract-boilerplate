import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css";

import { theme } from "../tokens/theme.css";
import  tokens from "../tokens";
//import "src/styles/tokens/font/index.ts";

export const media = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  "2xl": "screen and (min-width: 1536px)",
  motionSafe: "(prefers-reduced-motion: no-preference)",
  retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
};
export const vars = createGlobalTheme(":root, ::backdrop", theme, {
  test: "yellow",
  fontSize: tokens.fontSizes,
  color: tokens.colors,
  fontFamily: tokens.fontFamilies,
  size: tokens.sizes,
  space: tokens.spaces,
  radius: tokens.radii,
});

globalStyle(":root", {
   "@media": {
    "screen and (min-width: 1024px)": {
      vars: assignVars(theme, {
        test: "green",
        fontSize: tokens.fontSizes,
        color: tokens.colors,
        fontFamily: tokens.fontFamilies,
        size: tokens.sizes,
        space: tokens.spaces,
        radius: tokens.radii,
      }),
    },
  },
});


globalStyle("html, body *", {

  boxSizing: "border-box",
});

// globalStyle("img, svg", {
//   verticalAlign: "middle",
// });

// globalStyle("ul", {
//   listStyleType: "none",
// });
// globalStyle("body, body *", {
//   all: "unset",
// });

// Josh Comeau's CSS Reset
globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  // border: '1px solid salmon',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img', {
  objectFit: 'cover',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5', {
  overflowWrap: 'break-word',
});
globalStyle("h6", {
  color: "green",
  backgroundColor:"yellow",
});
globalStyle('#root', {
  isolation: 'isolate',
});

// Other globals
globalStyle('html, body, #root, #app', {
  minWidth: '100vw',
  minHeight: '100vh',
});

globalStyle("#app", {
  fontFamily: theme.fontFamily.Signathing,
  background: theme.color.brand.secondary,
  color: theme.color.brand.primary,
});

globalStyle('h1, h2, h3, h4, h5, h5', {
  fontFamily: theme.fontFamily.Signathing,
});

globalStyle("a", {
  color: theme.color.palette.black,
  textDecoration: "none",
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('a:visited', {
  color: theme.color.palette.black,
});