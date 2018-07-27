import Typography from 'typography';

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.5,
  scaleRatio: 2.2,
  googleFonts: [
    {
      name: "Julius Sans One",
      styles: ["400"]
    },
    {
      name: "Cormorant Garamond",
      styles: ["400", "700"]
    },
    {
      name: "Carrois Gothic SC",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Julius Sans One", "sans-serif"],
  bodyFontFamily: ["Cormorant Garamond", "serif"],
  headerColor: "inherit",
  bodyColor: "hsl(0, 0%, 0%, 0.8)",
  headerWeight: "400",
  bodyWeight: "400",
  boldWeight: "700",
  blockMarginBottom: "1rem",
  includeNormalize: true
});

export default typography;
