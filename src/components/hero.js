import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const FloatingText = glamorous.div(({ color, outlineColor }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  color: color,
  margin: styles.spacing.large,
  textShadow: `${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px`,
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center"
}));

const Container = glamorous.div({
  width: "100%",
  alignSelf: "flex-start",
  marginBottom: styles.spacing.large
});

export default ({ image, textColor, textOutlineColor, children }) => (
  <Container>
    {image}
    <FloatingText color={textColor} outlineColor={textOutlineColor}>
      {children}
    </FloatingText>
  </Container>
);
