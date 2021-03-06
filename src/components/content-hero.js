import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";
import TextContent from "../components/text-content";

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
  "left-bottom": `linear-gradient(0deg, ${styles.colors.background}, transparent 5%)`,
  "left-reverse": `linear-gradient(270deg, ${styles.colors.background}, transparent 5%)`,
  "right": `linear-gradient(270deg, ${styles.colors.background}, transparent)`,
  "right-bottom": `linear-gradient(0deg, ${styles.colors.background}, transparent 5%)`,
  "right-reverse": `linear-gradient(90deg, ${styles.colors.background}, transparent 5%)`,
};

const themes = {
  "blue": {
    baseColor: styles.colors.blue
  },
  "green": {
    baseColor: styles.colors.green
  },
  "orange": {
    baseColor: styles.colors.orange
  }
};

const Content = glamorous.div(({ alignment }) => ({
  width: "100%",
  marginTop: styles.spacing.large,
  padding: styles.spacing.small,
  alignSelf: alignmentChoices[alignment],
  display: "flex",
  flexDirection: "column",
  background: "transparent",
  "& > *": {
    textAlign: textAlignChoices[alignment],
    background: "none"
  },
  "& > p": {
    textAlign: "justify",
    hyphens: "auto",
    alignSelf: alignmentChoices[alignment]
  },
  ":hover > .overlays > .revealing-overlay": {
    background: "transparent"
  },
  [styles.mediaQueries.phone]: {
    "& > *": {
      textAlign: "left"
    },
    marginTop: styles.spacing.medium,
    padding: 0
  }
}));

const Background = glamorous.div(({ alignment, theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background:
    alignmentGradient[alignment] + ", " +
    alignmentGradient[alignment + "-reverse"] + ", " +
    alignmentGradient[alignment + "-bottom"] +
    `, linear-gradient(${styles.colors.background}, transparent)` +
    `, linear-gradient(${styles.colors.background}, ${themes[theme].baseColor} 50%)`
}));

const RevealingOverlay = glamorous.div({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: styles.colors.background,
  transition: "background 0.3s ease-in-out"
});

const Overlays = glamorous.div({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
});

export default ({ alignment, theme, className, header, image, text }) =>
  <Content className={className} alignment={alignment}>
    <Overlays className="overlays">
      <Background alignment={alignment} theme={theme} />
      <RevealingOverlay className="revealing-overlay"/>
    </Overlays>
    <h2>{header}</h2>
    <TextContent
      alignment={alignment}
      image={image}
      text={text}
    />
  </Content>;
