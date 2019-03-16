import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const Centered = glamorous.div({
  textAlign: "center",
  marginTop: styles.spacing.large,
  marginBottom: styles.spacing.large,
  fontSize: "30px",
  borderTop: "1px black solid",
  borderBottom: "1px black solid",
});

export default ({ children }) =>
  <Centered>
    {children}
  </Centered>;
