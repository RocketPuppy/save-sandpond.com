import React from 'react'
import Title from "../components/title";
import glamorous from "glamorous";
import styles from "../utils/styles";

export default glamorous.h1(({ centered=false }) => ({
  fontSize: "48px",
  textAlign: centered ? "center" : "left",
  fontFamily: styles.fontFamilies.singleHeader
}));
