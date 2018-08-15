import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const Centered = glamorous.div({
  textAlign: "center",
  marginTop: styles.spacing.large,
  marginBottom: styles.spacing.large,
  "& ul": {
    textAlign: "left"
  }
});

export default ({ header, items }) =>
  <Centered>
    <h2>{header}</h2>
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </Centered>
