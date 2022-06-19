import { createStitches } from "@stitches/react";

const stitches = createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1200px)",
  },
  theme: {
    colors: {
      primary: "#E30613",
      background: "#FFFFFF",

      grey_100: "#333333",
      grey_200: "#4F4F4F",
      grey_300: "#828282",
      grey_400: "#BDBDBD",
      grey_500: "#E0E0E0",
      grey_600: "#EEEEEE",
      grey_700: "#F6F6F6",
      grey_800: "#FBFBFB",
    },

    space: {
      xxsmall: "0.422rem",
      xsmall: "0.563rem",
      small: "0.75rem",
      regular: "1rem",
      medium: "1.33rem",
      large: "1.77rem",
      xlarge: "2.369rem",
      xxlarge: "3.157rem",
    },

    fontSizes: {
      font_xxsmall: "0.422rem",
      font_xsmall: "0.563rem",
      font_small: "0.75rem",
      font_regular: "1rem",
      font_medium: "1.33rem",
      font_large: "1.77rem",
      font_xlarge: "2.369rem",
      font_xxlarge: "3.157rem",
    },
  },
});

const injectGlobalStyles = stitches.globalCss({
  //body: { margin: 0, padding: 0 },
  //"*": { fontFamily: "Poppins" },
});

injectGlobalStyles();

export default stitches;
