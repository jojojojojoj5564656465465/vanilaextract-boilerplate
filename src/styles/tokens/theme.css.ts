import { createThemeContract } from "@vanilla-extract/css";

import  tokens from "./index";

export const theme = createThemeContract({
  test:null,
  fontSize: tokens.fontSizes,
  color: tokens.colors,
  fontFamily: tokens.fontFamilies,
  size: tokens.sizes,
  space: tokens.spaces,
  radius: tokens.radii,
});
