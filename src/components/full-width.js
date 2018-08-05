import React from "react";
import glamorous from "glamorous";
import styles from "../utils/styles";

export default glamorous.div({
  padding: styles.spacing.large,
  maxWidth: "1400px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [styles.mediaQueries.phone]: {
    padding: styles.spacing.small
  }
});
