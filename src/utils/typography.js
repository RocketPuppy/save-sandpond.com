import Typography from 'typography';
import styles from "./styles";

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.7,
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
  headerWeight: "700",
  bodyWeight: "400",
  boldWeight: "700",
  blockMarginBottom: styles.spacing.medium,
  includeNormalize: true
});

export default typography;
