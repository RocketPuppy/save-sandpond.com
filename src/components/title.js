import React from 'react'
import Title from "../components/title";
import glamorous from "glamorous";
import { constants } from "../utils/typography";

export default glamorous.h1({
  fontSize: "48px",
  textAlign: "center",
  fontFamily: constants.fontFamilies.singleHeader
});
