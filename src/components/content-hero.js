import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const alignmentChoices = {
  left: "flex-start",
  right: "flex-end"
};

const textAlignChoices = {
  "left": "left",
  "right": "right"
};

const alignmentGradient = {
  "left": `linear-gradient(90deg, ${styles.colors.background}, transparent)`,
  "right": `linear-gradient(270deg, ${styles.colors.background}, transparent)`
};

const themes = {
  "blue": {
    baseColor: "#B7FAFF"
  },
  "green": {
    baseColor: "#D6FFB7"
  },
  "orange": {
    baseColor: "#FFE0B7"
  }
};

export default glamorous.div(({ alignment, theme }) => ({
  width: "100%",
  marginTop: styles.spacing.large,
  padding: styles.spacing.small,
  alignSelf: alignmentChoices[alignment],
  display: "flex",
  flexDirection: "column",
  "& > *": {
    textAlign: textAlignChoices[alignment]
  },
  "& > p": {
    textAlign: "justify",
    hyphens: "auto",
    alignSelf: alignmentChoices[alignment]
  },
  background:
    alignmentGradient[alignment] +
    `, linear-gradient(${styles.colors.background}, transparent)` +
    `, linear-gradient(${styles.colors.background}, ${themes[theme].baseColor} 50%)`
}));
