import { globalFontFace } from "@vanilla-extract/css";
import { SrcMake } from "../../utils";

globalFontFace("KaloramaScript", {
  fontDisplay: "swap",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  src: SrcMake("./files/KaloramaScript.woff2", ["woff2", "woff", "ttf"]),
});

globalFontFace("KaloramaOutline", {
  src: SrcMake("./files/KaloramaOutline.woff2", ["woff2", "woff", "ttf"]),
});
globalFontFace("Signathing", {
  fontStyle: "normal",
  src: SrcMake("./files/signathing/Signathing.woff2", [
    "woff2",
    "woff",
    "ttf",
    "otf",
  ]),
});

globalFontFace("Signathing", {
  fontStyle: "italic",
  fontDisplay:"swap",
  src: SrcMake("./files/signathing/Signathing-Italic.woff2", [
    "woff2",
    "woff",
    "ttf",
    "otf",
  ]),
});


