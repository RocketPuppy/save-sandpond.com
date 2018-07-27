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
  }
}));
