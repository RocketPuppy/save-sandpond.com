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

export default glamorous.div(({ alignment }) => ({
  maxWidth: styles.layout.contentWidth,
  marginTop: styles.spacing.large,
  alignSelf: alignmentChoices[alignment],
  "& > *": {
    textAlign: textAlignChoices[alignment]
  },
  "& > p": {
    textAlign: "justify",
    hyphens: "auto"
  }
}));
