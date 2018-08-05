import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const Centered = glamorous.div({
  textAlign: "center",
  marginTop: styles.spacing.large,
  marginBottom: styles.spacing.large,
  fontSize: "30px"
});

export default ({ text, email }) =>
  <Centered>
    {text}: <a href={`mailto:${email}`}>{email}</a>
  </Centered>;
