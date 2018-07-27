import React from "react";
import glamorous from "glamorous";
import styles from "../utils/styles";

export default glamorous.div({
  padding: styles.spacing.medium,
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});
