export function hoverfn(x: Record<string, string>) {
  return {
    "@media": {
      "(hover: hover)": {
        selectors: {
          "&:hover": {
            ...x,
          },
        },
      },
      "screen and (max-width: 940px)": {
        selectors: {
          "&:active": {
            ...x,
          },
        },
      },
    },
  };
}

/**
 * 
 * @param path real path to the font file
 * @param formats array of extension like woff woff2 ttf otf
 * @returns {string}
 */
export function SrcMake(path: string, formats: string[] = []) {
  const Regex = /(?<=\.)(?<extension>\w+)$/;

  const extensionInPath = Regex.exec(path)?.groups?.extension;

  if (extensionInPath === undefined) {
    throw new Error(
      "the groups you provide is undefined in the Regex matchFromRegex"
    );
  }
  formats.push(extensionInPath);
  const position = path.indexOf(extensionInPath);
  const dictionary: Record<string, string> = {
    woff2: "woff2",
    woff: "woff",
    ttf: "truetype",
    otf: "truetype",
  };

  // Validate input to prevent potential errors:
  if (!path || !formats || !formats.length) {
    throw new Error("Invalid arguments: path, name, and formats are required.");
  }

  // Remove trailing comma and ensure unique, lowercase formats for efficiency:
  return [...new Set(formats)]
    .map((format) => format.toLowerCase())
    .reduce((acc, curr) => {
      return `${acc}url('${path.slice(0, position)}${curr}') format('${
        dictionary?.[curr] || curr
      }'), `;
    }, "")
    .trim()
    .replace(/.$/, "");
}